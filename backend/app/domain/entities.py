from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class Vendor(Base):
    __tablename__ = "vendors"

    locationid = Column(Integer, primary_key=True, index=True)
    Applicant = Column(String, nullable=True)
    FacilityType = Column(String, nullable=True)
    cnn = Column(Integer, nullable=True)
    LocationDescription = Column(String, nullable=True)
    Address = Column(String, nullable=True)
    blocklot = Column(String, nullable=True)
    block = Column(String, nullable=True)
    lot = Column(String, nullable=True)
    permit = Column(String, nullable=True)
    Status = Column(String, nullable=True)
    FoodItems = Column(String, nullable=True)
    X = Column(Float, nullable=True)
    Y = Column(Float, nullable=True)
    Latitude = Column(Float, nullable=True)
    Longitude = Column(Float, nullable=True)
    Schedule = Column(String, nullable=True)
    dayshours = Column(String, nullable=True)
    NOISent = Column(String, nullable=True)
    Approved = Column(String, nullable=True)  # ou DateTime se for convertido
    Received = Column(Integer, nullable=True)
    PriorPermit = Column(Integer, nullable=True)
    ExpirationDate = Column(String, nullable=True)  # ou DateTime
    Location = Column(String, nullable=True)
    Fire_Prevention_Districts = Column(Integer, nullable=True)
    Police_Districts = Column(Integer, nullable=True)
    Supervisor_Districts = Column(Integer, nullable=True)
    Zip_Codes = Column(Integer, nullable=True)
    Neighborhoods_old = Column(Integer, nullable=True)
