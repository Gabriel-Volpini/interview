import pytest
from app.domain.enums.vendor_status import VendorStatus

@pytest.mark.asyncio
async def test_search_by_applicant_and_status(async_client):
    response = await async_client.get("/vendors/search", params={
        "applicant": "ice",
        "status": VendorStatus.APPROVED.value
    })
    assert response.status_code == 200
    for item in response.json():
        assert item["Status"] == VendorStatus.APPROVED.value
