import pytest

@pytest.mark.asyncio
async def test_invalid_status(async_client):
    response = await async_client.get("/vendors/search", params={
        "applicant": "ice",
        "status": "INVALID_STATUS"
    })
    assert response.status_code == 422
