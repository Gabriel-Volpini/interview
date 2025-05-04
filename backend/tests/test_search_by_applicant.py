import pytest

@pytest.mark.asyncio
async def test_search_by_applicant(async_client):
    response = await async_client.get("/vendors/search", params={"applicant": "ice"})
    assert response.status_code == 200
    assert isinstance(response.json(), list)
