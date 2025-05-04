from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession
from app.infrastructure.database import SessionLocal
from app.infrastructure.repositories.vendor_repository import VendorRepository
from app.services.vendor_service import VendorService
from app.domain.enums.vendor_status import VendorStatus


router = APIRouter()

async def get_db():
    async with SessionLocal() as session:
        yield session

@router.get("/vendors/search")
async def search_vendors(
    applicant: str = Query(..., description="Name of the applicant"),
    status: VendorStatus = Query(None, description="Optional status filter"),
    db: AsyncSession = Depends(get_db)
):
    repo = VendorRepository(db)
    service = VendorService(repo)
    return await service.search_vendors(applicant, status)

@router.get("/vendors/by-address")
async def search_vendors_by_address(
    address: str = Query(..., description="Partial or full street name"),
    db: AsyncSession = Depends(get_db)
):
    repo = VendorRepository(db)
    service = VendorService(repo)
    return await service.search_by_address(address)
