import json
from sqlalchemy import select
from app.domain.entities import Vendor

async def load_vendors_if_empty(session, json_path="data/db.json"):
    result = await session.execute(select(Vendor))
    if result.first():
        print("Table already has data")
        return

    with open(json_path, encoding="utf-8") as f:
        records = json.load(f)
        for entry in records:
            try:
                vendor = Vendor(
                    locationid=entry["locationid"],
                    Applicant=entry.get("Applicant"),
                    FacilityType=entry.get("FacilityType"),
                    cnn=entry.get("cnn"),
                    Address=entry.get("Address"),
                    LocationDescription=entry.get("LocationDescription"),
                    Status=entry.get("Status"),
                    FoodItems=entry.get("FoodItems"),
                    Latitude=entry.get("Latitude"),
                    Longitude=entry.get("Longitude"),
                )
                session.add(vendor)
            except Exception as e:
                print(f"Erro ao inserir: {entry['locationid']} - {e}")
        await session.commit()
        print("Dados inseridos.")
