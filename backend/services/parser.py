import re


PARAMETER_PATTERNS = {
    "HbA1c": r"(?:HbA1c|HBA1C|Glycated\s+Haemoglobin)\s*[:\-]?\s*(\d+(?:\.\d+)?)\s*%?",
    "LDL": r"(?:LDL(?:\s+Cholesterol)?)\s*[:\-]?\s*(\d+(?:\.\d+)?)\s*(?:mg/dL)?",
    "HDL": r"(?:HDL(?:\s+Cholesterol)?)\s*[:\-]?\s*(\d+(?:\.\d+)?)\s*(?:mg/dL)?",
    "Vitamin D": r"(?:Vitamin\s+D|25[-\s]?OH\s+Vitamin\s+D)\s*[:\-]?\s*(\d+(?:\.\d+)?)\s*(?:ng/mL|nmol/L)?",
    "Creatinine": r"(?:Creatinine)\s*[:\-]?\s*(\d+(?:\.\d+)?)\s*(?:mg/dL)?",
}


UNITS = {
    "HbA1c": "%",
    "LDL": "mg/dL",
    "HDL": "mg/dL",
    "Vitamin D": "ng/mL",
    "Creatinine": "mg/dL",
}


def extract_parameters(text: str):
    parameters = []

    for name, pattern in PARAMETER_PATTERNS.items():
        match = re.search(pattern, text, re.IGNORECASE)

        if match:
            value = float(match.group(1))

            parameters.append({
                "name": name,
                "value": value,
                "unit": UNITS[name],
                "confidence": 0.90,
            })

    return parameters