#!/usr/bin/env python3
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import sys

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "out"
ZIP_PATH = ROOT / "approval-site-out.zip"


def main():
    if not OUT_DIR.exists():
        print("Missing out/ directory. Run npm run build first.")
        return 1

    if ZIP_PATH.exists():
        ZIP_PATH.unlink()

    with ZipFile(ZIP_PATH, "w", ZIP_DEFLATED) as archive:
        for path in sorted(OUT_DIR.rglob("*")):
            if path.is_file():
                archive.write(path, path.relative_to(OUT_DIR).as_posix())

    print(ZIP_PATH)
    return 0


if __name__ == "__main__":
    sys.exit(main())
