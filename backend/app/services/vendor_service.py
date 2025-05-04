from app.infrastructure.repositories.vendor_repository import VendorRepository

class VendorService:
    def __init__(self, repo: VendorRepository):
        self.repo = repo

    async def search_vendors(self, applicant: str, status: str = None):
        return await self.repo.search(applicant, status)

    async def search_by_address(self, partial_address: str):
        return await self.repo.search_by_address(partial_address)
