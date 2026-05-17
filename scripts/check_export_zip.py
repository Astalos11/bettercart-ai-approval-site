#!/usr/bin/env python3
from pathlib import Path
from zipfile import ZipFile, BadZipFile
import sys

ROOT = Path(__file__).resolve().parents[1]
ZIP_PATH = ROOT / "approval-site-out.zip"

REQUIRED_ROOT_ENTRIES = {
    "index.html",
    "404.html",
    "_next/",
    "about/",
    "contact/",
    "for-reviewers/",
    "publisher-kit/",
    "tools/",
}


def has_entry(entries, expected):
    if expected.endswith("/"):
        return any(entry.startswith(expected) for entry in entries)
    return expected in entries


def main():
    if not ZIP_PATH.exists():
        print(f"missing_zip={ZIP_PATH}")
        return 1

    try:
        with ZipFile(ZIP_PATH) as archive:
            entries = set(archive.namelist())
    except BadZipFile:
        print(f"bad_zip={ZIP_PATH}")
        return 1

    missing = sorted(entry for entry in REQUIRED_ROOT_ENTRIES if not has_entry(entries, entry))
    nested_out = sorted(entry for entry in entries if entry.startswith("out/"))[:10]

    print(f"zip_entries={len(entries)}")
    print(f"missing_required_root_entries={len(missing)}")
    print(f"nested_out_entries={len(nested_out)}")

    if missing:
        print("Missing required zip root entries:")
        print("\n".join(missing))
    if nested_out:
        print("Zip appears to contain an outer out/ directory:")
        print("\n".join(nested_out))

    return 1 if missing or nested_out else 0


if __name__ == "__main__":
    sys.exit(main())
