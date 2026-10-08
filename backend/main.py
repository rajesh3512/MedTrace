from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
from uuid import uuid4
from datetime import datetime
from services.ocr import extract_text
from services.parser import extract_parameters
import shutil


app = FastAPI(
    title="MedTrace AI API",
    description="Longitudinal health intelligence backend",
    version="1.0.0"
)

# --------------------------------------------------
# CORS
# --------------------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --------------------------------------------------
# Storage
# --------------------------------------------------

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)

reports = []


# --------------------------------------------------
# Demo patient data
# --------------------------------------------------

patients = {
    "patient_001": {
        "id": "patient_001",
        "name": "Rajesh",
        "relationship": "You"
    },
    "patient_002": {
        "id": "patient_002",
        "name": "Mother",
        "relationship": "Mother"
    },
    "patient_003": {
        "id": "patient_003",
        "name": "Father",
        "relationship": "Father"
    }
}


# --------------------------------------------------
# Root
# --------------------------------------------------

@app.get("/")
def root():
    return {
        "application": "MedTrace AI",
        "status": "running",
        "message": "MedTrace backend is online"
    }


# --------------------------------------------------
# Health check
# --------------------------------------------------

@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "MedTrace AI API"
    }


# --------------------------------------------------
# Get patients
# --------------------------------------------------

@app.get("/patients")
def get_patients():
    return list(patients.values())


# --------------------------------------------------
# Upload report
# --------------------------------------------------

@app.post("/reports/upload")
async def upload_report(
    file: UploadFile = File(...),
    patient_id: str = "patient_001"
):

    if patient_id not in patients:
        raise HTTPException(
            status_code=404,
            detail="Patient not found"
        )

    allowed_extensions = {
        ".pdf",
        ".png",
        ".jpg",
        ".jpeg"
    }

    extension = Path(file.filename).suffix.lower()

    if extension not in allowed_extensions:
        raise HTTPException(
            status_code=400,
            detail="Only PDF, PNG, JPG and JPEG files are supported"
        )

    report_id = str(uuid4())

    filename = f"{report_id}{extension}"
    file_path = UPLOAD_DIR / filename

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    report = {
        "id": report_id,
        "patient_id": patient_id,
        "original_filename": file.filename,
        "stored_filename": filename,
        "uploaded_at": datetime.now().isoformat(),
        "status": "uploaded"
    }

    reports.append(report)

    return {
        "message": "Report uploaded successfully",
        "report": report
    }


# --------------------------------------------------
# Get all reports
# --------------------------------------------------

@app.get("/reports")
def get_reports(patient_id: str | None = None):

    if patient_id:
        return [
            report
            for report in reports
            if report["patient_id"] == patient_id
        ]

    return reports


# --------------------------------------------------
# Get single report
# --------------------------------------------------

@app.get("/reports/{report_id}")
def get_report(report_id: str):

    for report in reports:

        if report["id"] == report_id:
            return report

    raise HTTPException(
        status_code=404,
        detail="Report not found"
    )
@app.post("/reports/{report_id}/analyze")
def analyze_report(report_id: str):

    # Find report
    report = None

    for item in reports:
        if item["id"] == report_id:
            report = item
            break

    if not report:
        raise HTTPException(
            status_code=404,
            detail="Report not found"
        )

    file_path = UPLOAD_DIR / report["stored_filename"]

    if not file_path.exists():
        raise HTTPException(
            status_code=404,
            detail="Uploaded file not found"
        )

    try:
        # Step 1: OCR
        text = extract_text(str(file_path))

        if not text.strip():
            raise HTTPException(
                status_code=422,
                detail="Could not extract text from the report"
            )

        # Step 2: Extract parameters
        parameters = extract_parameters(text)

        # Step 3: Update report
        report["status"] = "ready"
        report["extracted_text"] = text
        report["parameters"] = parameters
        report["analyzed_at"] = datetime.now().isoformat()

        return {
            "message": "Report analyzed successfully",
            "report": report,
            "parameters": parameters
        }

    except HTTPException:
        raise

    except Exception as error:
        report["status"] = "needs_review"

        raise HTTPException(
            status_code=500,
            detail=f"Report analysis failed: {str(error)}"
        )

@app.get("/patients/{patient_id}/changes")
def get_patient_changes(patient_id: str):

    if patient_id not in patients:
        raise HTTPException(
            status_code=404,
            detail="Patient not found"
        )

    # Get analyzed reports for this patient
    patient_reports = [
        report
        for report in reports
        if report["patient_id"] == patient_id
        and report.get("status") == "ready"
        and report.get("parameters")
    ]

    # Need at least two reports
    if len(patient_reports) < 2:
        return {
            "patient_id": patient_id,
            "message": "At least two analyzed reports are required",
            "changes": []
        }

    # Sort by analysis/upload date
    patient_reports.sort(
        key=lambda report: report.get("analyzed_at", "")
    )

    previous_report = patient_reports[-2]
    current_report = patient_reports[-1]

    previous_parameters = {
        parameter["name"]: parameter
        for parameter in previous_report["parameters"]
    }

    current_parameters = {
        parameter["name"]: parameter
        for parameter in current_report["parameters"]
    }

    changes = []

    # Compare parameters appearing in both reports
    for name in current_parameters:

        if name not in previous_parameters:
            continue

        previous = previous_parameters[name]
        current = current_parameters[name]

        previous_value = previous["value"]
        current_value = current["value"]

        difference = current_value - previous_value

        if difference == 0:
            status = "Stable"
        elif difference < 0:
            status = "Improving"
        else:
            status = "Changed"

        changes.append({
            "name": name,
            "previous": previous_value,
            "current": current_value,
            "unit": current["unit"],
            "difference": round(difference, 2),
            "status": status,
            "evidence": {
                "previous_report_id": previous_report["id"],
                "current_report_id": current_report["id"]
            }
        })

    return {
        "patient_id": patient_id,
        "previous_report": previous_report["id"],
        "current_report": current_report["id"],
        "changes": changes
    }