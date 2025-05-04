import pytest

@pytest.mark.asyncio
async def test_search_by_address(async_client):
    response = await async_client.get("/vendors/by-address", params={"address": "SAN"})
    assert response.status_code == 200
    assert isinstance(response.json(), list)
