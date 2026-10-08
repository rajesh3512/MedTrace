from pathlib import Path

import fitz  # PyMuPDF
import pytesseract
from PIL import Image


# --------------------------------------------------
# Tesseract configuration
# --------------------------------------------------

pytesseract.pytesseract.tesseract_cmd = (
    r"C:\Program Files\Tesseract-OCR\tesseract.exe"
)


# --------------------------------------------------
# Image OCR
# --------------------------------------------------

def extract_text_from_image(file_path: str) -> str:
    """
    Extract text from PNG/JPG/JPEG using Tesseract OCR.
    """

    image = Image.open(file_path)

    text = pytesseract.image_to_string(image)

    return text.strip()


# --------------------------------------------------
# PDF extraction
# --------------------------------------------------

def extract_text_from_pdf(file_path: str) -> str:
    """
    Extract text from a PDF.

    First attempts normal text extraction.
    If the PDF contains little/no selectable text,
    it falls back to OCR.
    """

    document = fitz.open(file_path)

    # ----------------------------------------------
    # STEP 1: Try normal PDF text extraction
    # ----------------------------------------------

    direct_text = []

    for page in document:
        text = page.get_text()

        if text.strip():
            direct_text.append(text)

    direct_text = "\n".join(direct_text).strip()

    # If enough text was extracted, use it.
    if len(direct_text) > 50:
        document.close()
        return direct_text

    # ----------------------------------------------
    # STEP 2: OCR scanned PDF
    # ----------------------------------------------

    ocr_text = []

    for page in document:

        # Render PDF page as an image.
        pix = page.get_pixmap(
            matrix=fitz.Matrix(2, 2)
        )

        image = Image.frombytes(
            "RGB",
            [pix.width, pix.height],
            pix.samples
        )

        # Run Tesseract OCR.
        text = pytesseract.image_to_string(image)

        if text.strip():
            ocr_text.append(text)

    document.close()

    return "\n".join(ocr_text).strip()


# --------------------------------------------------
# Main extraction function
# --------------------------------------------------

def extract_text(file_path: str) -> str:
    """
    Automatically chooses the correct extraction
    method based on the file extension.
    """

    extension = Path(file_path).suffix.lower()

    if extension in [".jpg", ".jpeg", ".png"]:
        return extract_text_from_image(file_path)

    if extension == ".pdf":
        return extract_text_from_pdf(file_path)

    raise ValueError(
        f"Unsupported file type: {extension}"
    )