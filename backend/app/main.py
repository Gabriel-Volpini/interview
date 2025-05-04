from fastapi import FastAPI
from contextlib import asynccontextmanager
from app.infrastructure.database import engine, SessionLocal
from app.domain.entities import Base
from app.services.loaders import load_vendors_if_empty
from app.interfaces.api.routes import router

@asynccontextmanager
async def lifespan(app: FastAPI):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    async with SessionLocal() as session:
        await load_vendors_if_empty(session)
    yield

app = FastAPI(lifespan=lifespan)
app.include_router(router)
