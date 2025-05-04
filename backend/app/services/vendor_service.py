from app.infrastructure.repositories.vendor_repository import VendorRepository

class VendorService:
    def __init__(self, repo: VendorRepository):
        self.repo = repo

    async def search_vendors(self, applicant: str, status: str = None):
        return await self.repo.search(applicant, status)

    async def search_by_address(self, partial_address: str):
        return await self.repo.search_by_address(partial_address)

    async def find_nearest_vendors(self, lat: float, lng: float, include_all_status: bool = False):
        return await self.repo.find_nearest(lat, lng, only_approved=not include_all_status)
