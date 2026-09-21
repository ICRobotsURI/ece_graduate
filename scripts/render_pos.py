"""Render the local Program of Study PDFs for text extraction and review."""

from pathlib import Path
import re
import sys


ROOT = Path(__file__).resolve().parents[1]
LOCAL_PACKAGES = ROOT / "source_material" / "_python_packages"
sys.path.insert(0, str(LOCAL_PACKAGES))

import pymupdf  # noqa: E402


PDF_ROOT = (
    ROOT
    / "source_material"
    / "_extracted"
    / "ProgramOfStudy-20260921T014717Z-1-001"
    / "ProgramOfStudy"
)
OUTPUT_ROOT = ROOT / "source_material" / "_pos_pages"


def safe_name(value: str) -> str:
    return re.sub(r"[^A-Za-z0-9._-]+", "-", value).strip("-")


def main() -> None:
    OUTPUT_ROOT.mkdir(parents=True, exist_ok=True)
    page_count = 0
    for pdf_path in sorted(PDF_ROOT.glob("*.pdf")):
        destination = OUTPUT_ROOT / safe_name(pdf_path.stem)
        destination.mkdir(exist_ok=True)
        document = pymupdf.open(pdf_path)
        for index, page in enumerate(document):
            output_path = destination / f"page-{index + 1}.png"
            page.get_pixmap(matrix=pymupdf.Matrix(2.5, 2.5), alpha=False).save(output_path)
            page_count += 1
        print(f"{pdf_path.name}: {len(document)} pages")
        document.close()
    print(f"Rendered {page_count} pages from 21 examples to {OUTPUT_ROOT}")


if __name__ == "__main__":
    main()

