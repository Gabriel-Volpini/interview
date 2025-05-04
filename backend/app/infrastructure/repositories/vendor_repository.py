from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.domain.entities import Vendor

class VendorRepository:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def search(self, applicant: str, status: str = None):
        query = select(Vendor).where(Vendor.Applicant.ilike(f"%{applicant}%"))
        if status:
            query = query.where(Vendor.Status.ilike(status))
        result = await self.session.execute(query)
        return result.scalars().all()
