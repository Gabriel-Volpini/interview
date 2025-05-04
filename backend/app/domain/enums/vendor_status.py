from enum import Enum

class VendorStatus(str, Enum):
    REQUESTED = "REQUESTED"
    APPROVED = "APPROVED"
    EXPIRED = "EXPIRED"
    SUSPENDED = "SUSPENDED"
    ISSUED = "ISSUED"
