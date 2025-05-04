from app.infrastructure.repositories.vendor_repository import VendorRepository

class VendorService:
    def __init__(self, repo: VendorRepository):
        self.repo = repo

    async def search_vendors(self, applicant: str, status: str = None):
        return await self.repo.search(applicant, status)
