#!/usr/bin/env python3
import csv
import json
import random
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path("/home/astalos/usda_food_pipeline/outputs/mvp_hard_filter_nutrition_v0_1.csv")
OUTPUT = ROOT / "lib" / "usdaDemoProducts.json"
SEED = 20260517

CATEGORY_MAP = {
    "snack": [
        "Popcorn, Peanuts, Seeds & Related Snacks",
        "Chips, Pretzels & Snacks",
        "Other Snacks",
        "Wholesome Snacks",
        "Crackers & Biscotti",
    ],
    "bar": [
        "Snack, Energy & Granola Bars",
    ],
    "breakfast": [
        "Cereal",
        "Breads & Buns",
    ],
    "beverage": [
        "Fruit & Vegetable Juice, Nectars & Fruit Drinks",
        "Soda",
        "Other Drinks",
        "Water",
        "Milk",
    ],
    "pantry": [
        "Pasta by Shape & Type",
        "Ketchup, Mustard, BBQ & Cheese Sauce",
        "Pickles, Olives, Peppers & Relishes",
        "Salad Dressing & Mayonnaise",
        "Dips & Salsa",
    ],
    "dessert": [
        "Candy",
        "Cookies & Biscuits",
        "Chocolate",
        "Cakes, Cupcakes, Snack Cakes",
        "Ice Cream & Frozen Yogurt",
    ],
    "meal": [
        "Frozen Dinners & Entrees",
        "Frozen Appetizers & Hors D'oeuvres",
        "Sausages, Hotdogs & Brats",
    ],
}

TARGET_PER_CATEGORY = {
    "snack": 14,
    "bar": 10,
    "breakfast": 10,
    "beverage": 12,
    "pantry": 12,
    "dessert": 14,
    "meal": 8,
}


def as_float(value):
    if value in (None, ""):
        return None
    try:
        return float(value)
    except ValueError:
        return None


def rounded(value, digits=1):
    if value is None:
        return None
    rounded_value = round(value, digits)
    if rounded_value == int(rounded_value):
        return int(rounded_value)
    return rounded_value


def title_case(value):
    words = str(value or "").strip().split()
    if not words:
        return "Unnamed USDA Product"
    return " ".join(word[:1].upper() + word[1:].lower() for word in words)


def category_for(usda_category):
    for demo_category, usda_categories in CATEGORY_MAP.items():
        if usda_category in usda_categories:
            return demo_category
    return None


def fit_note(product):
    notes = []
    if product["totalSugar"] <= 2:
        notes.append("low listed sugar")
    if product["protein"] >= 10:
        notes.append("meaningful protein")
    if product["sodium"] <= 140:
        notes.append("lower sodium")
    if product["calories"] <= 150:
        notes.append("lower calorie")
    return ", ".join(notes[:2]) or "mixed nutrition tradeoffs"


def tradeoff(product):
    tradeoffs = []
    if product["totalSugar"] >= 12:
        tradeoffs.append("higher sugar")
    if product["sodium"] >= 400:
        tradeoffs.append("higher sodium")
    if product["calories"] >= 300:
        tradeoffs.append("higher calories")
    if product["protein"] <= 2:
        tradeoffs.append("low protein")
    return ", ".join(tradeoffs[:2]) or "compare with similar products"


def usable(row):
    numeric_required = [
        "calories_per_serving",
        "total_sugar_g_per_serving",
        "sodium_mg_per_serving",
        "protein_g_per_serving",
        "serving_size",
    ]
    if not row.get("serving_size_unit"):
        return False
    values = {key: as_float(row.get(key)) for key in numeric_required}
    if any(value is None for value in values.values()):
        return False
    if values["serving_size"] <= 0:
        return False
    if not (0 <= values["calories_per_serving"] <= 700):
        return False
    if not (0 <= values["total_sugar_g_per_serving"] <= 80):
        return False
    if not (0 <= values["sodium_mg_per_serving"] <= 1500):
        return False
    if not (0 <= values["protein_g_per_serving"] <= 60):
        return False
    return True


def main():
    if not SOURCE.exists():
        raise SystemExit(f"Missing source dataset: {SOURCE}")

    rng = random.Random(SEED)
    buckets = {category: [] for category in TARGET_PER_CATEGORY}

    with SOURCE.open(newline="", encoding="utf-8", errors="replace") as source_file:
        reader = csv.DictReader(source_file)
        for row in reader:
            demo_category = category_for(row.get("branded_food_category", ""))
            if not demo_category or not usable(row):
                continue

            calories = rounded(as_float(row["calories_per_serving"]))
            sugar = rounded(as_float(row["total_sugar_g_per_serving"]))
            protein = rounded(as_float(row["protein_g_per_serving"]))
            sodium = rounded(as_float(row["sodium_mg_per_serving"]), 0)
            serving_size = rounded(as_float(row["serving_size"]))

            product = {
                "id": row["canonical_product_id"],
                "name": title_case(row.get("description")),
                "brand": title_case(row.get("brand_name") or row.get("brand_owner") or ""),
                "category": demo_category,
                "usdaCategory": row.get("branded_food_category", ""),
                "calories": calories,
                "totalSugar": sugar,
                "protein": protein,
                "sodium": sodium,
                "serving": f"{serving_size}{row.get('serving_size_unit', '').strip()}",
                "fdcId": row.get("selected_fdc_id", ""),
                "source": f"USDA FDC {row.get('selected_fdc_id', '')}",
                "note": "",
                "tradeoff": "",
            }
            product["note"] = f"Canonical USDA sample: {fit_note(product)}."
            product["tradeoff"] = f"Tradeoff to review: {tradeoff(product)}."
            buckets[demo_category].append(product)

    selected = []
    seen_names = set()
    for demo_category, target in TARGET_PER_CATEGORY.items():
        candidates = buckets[demo_category]
        rng.shuffle(candidates)
        for product in candidates:
            normalized_name = product["name"].lower()
            if normalized_name in seen_names:
                continue
            selected.append(product)
            seen_names.add(normalized_name)
            if sum(1 for item in selected if item["category"] == demo_category) >= target:
                break

    selected.sort(key=lambda item: (item["category"], item["name"]))
    payload = {
        "generatedFrom": str(SOURCE),
        "generatedBy": "scripts/build_usda_demo_products.py",
        "seed": SEED,
        "count": len(selected),
        "products": selected,
    }
    OUTPUT.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {OUTPUT} products={len(selected)}")


if __name__ == "__main__":
    main()
