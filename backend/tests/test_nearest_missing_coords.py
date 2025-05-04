import pytest

@pytest.mark.asyncio
async def test_missing_lat(async_client):
    response = await async_client.get("/vendors/nearest", params={"lng": -122.42})
    assert response.status_code == 422

@pytest.mark.asyncio
async def test_missing_lng(async_client):
    response = await async_client.get("/vendors/nearest", params={"lat": 37.77})
    assert response.status_code == 422
