import pytest

@pytest.mark.asyncio
async def test_get_nearest_vendors(async_client):
    response = await async_client.get("/vendors/nearest", params={
        "lat": 37.77,
        "lng": -122.42
    })
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    assert len(data) <= 5
