from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.domain.entities import Vendor
from sqlalchemy import text


class VendorRepository:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def search(self, applicant: str, status: str = None):
        query = select(Vendor).where(Vendor.Applicant.ilike(f"%{applicant}%"))
        if status:
            query = query.where(Vendor.Status.ilike(status))
        result = await self.session.execute(query)
        return result.scalars().all()

    async def search_by_address(self, partial_address: str):
        query = select(Vendor).where(Vendor.Address.ilike(f"%{partial_address}%"))
        result = await self.session.execute(query)
        return result.scalars().all()

    async def find_nearest(self, lat: float, lng: float, only_approved: bool = True):
        base_query = """
            SELECT * FROM vendors
            {where_clause}
            ORDER BY (("Latitude" - :lat)*("Latitude" - :lat) + ("Longitude" - :lng)*("Longitude" - :lng))
            LIMIT 5
        """
    
        where = 'WHERE "Status" = \'APPROVED\'' if only_approved else ""
        query = text(base_query.format(where_clause=where))
    
        result = await self.session.execute(query, {"lat": lat, "lng": lng})
        rows = result.fetchall()

        return [dict(row._mapping) for row in rows]
