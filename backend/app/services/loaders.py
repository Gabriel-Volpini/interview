import json
from sqlalchemy import select
from app.domain.entities import Vendor

def parse_int(value):
    try:
        return int(value)
    except (TypeError, ValueError):
        return None

def parse_float(value):
    try:
        return float(value)
    except (TypeError, ValueError):
        return None

def parse_str(value):
    return str(value).strip() if value else None

async def load_vendors_if_empty(session, json_path="data/db.json"):
    result = await session.execute(select(Vendor))
    if result.first():
        print("Tabela já contém dados.")
        return

    with open(json_path, encoding="utf-8") as f:
        records = json.load(f)
        for entry in records:
            try:
                vendor = Vendor(
                    locationid=parse_int(entry.get("locationid")),
                    Applicant=parse_str(entry.get("Applicant")),
                    FacilityType=parse_str(entry.get("FacilityType")),
                    cnn=parse_int(entry.get("cnn")),
                    Address=parse_str(entry.get("Address")),
                    LocationDescription=parse_str(entry.get("LocationDescription")),
                    Status=parse_str(entry.get("Status")),
                    FoodItems=parse_str(entry.get("FoodItems")),
                    X=parse_float(entry.get("X")),
                    Y=parse_float(entry.get("Y")),
                    Latitude=parse_float(entry.get("Latitude")),
                    Longitude=parse_float(entry.get("Longitude")),
                    Schedule=parse_str(entry.get("Schedule")),
                    dayshours=parse_str(entry.get("dayshours")),
                    NOISent=parse_str(entry.get("NOISent")),
                    Approved=parse_str(entry.get("Approved")),  # ou converter para datetime
                    Received=parse_int(entry.get("Received")),
                    PriorPermit=parse_int(entry.get("PriorPermit")),
                    ExpirationDate=parse_str(entry.get("ExpirationDate")),
                    Location=parse_str(entry.get("Location")),
                    Fire_Prevention_Districts=parse_int(entry.get("Fire Prevention Districts")),
                    Police_Districts=parse_int(entry.get("Police Districts")),
                    Supervisor_Districts=parse_int(entry.get("Supervisor Districts")),
                    Zip_Codes=parse_int(entry.get("Zip Codes")),
                    Neighborhoods_old=parse_int(entry.get("Neighborhoods (old)")),
                )
                session.add(vendor)
            except Exception as e:
                print(f"Erro ao processar entrada: {entry.get('locationid')} → {e}")

        await session.commit()
        print(f"{len(records)} registros inseridos com sucesso.")
