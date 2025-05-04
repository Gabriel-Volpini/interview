import pytest_asyncio
from httpx import AsyncClient

BASE_URL = "http://web:8000"  

@pytest_asyncio.fixture
async def async_client():
    async with AsyncClient(base_url=BASE_URL) as client:
        yield client
