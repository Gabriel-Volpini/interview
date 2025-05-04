import pytest

@pytest.mark.asyncio
async def test_missing_applicant(async_client):
    response = await async_client.get("/vendors/search")
    assert response.status_code == 422
