from fastapi import APIRouter

router = APIRouter()

@router.get("/vendors")
async def list_vendors():
    return {"message": "it works!"}
