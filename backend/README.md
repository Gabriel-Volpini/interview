
# Food Facilities Challenge (Backend)
This is a backend-focused application built for the Food Facilities Challenge, using public data from SF Open Data – Mobile Food Facility Permits.

The project provides a RESTful API that enables users to:
- Search by applicant name with optional filtering by status
- Search by street name (partial match supported)
- Retrieve the nearest 5 food trucks, optionally filtered by status (APPROVED or all).

This version of the challenge is implemented in Python using FastAPI, and Clean Architecture principles for maintainability and scalability.

Watch a quick demo here https://youtu.be/RuIrW_VjyrA

[![image](https://github.com/user-attachments/assets/82f6fcb2-19fa-4591-b30d-9ef280eb1610)](https://youtu.be/RuIrW_VjyrA)

## Tech Stack
- Framework: FastAPI
- Language: Python 3
- Testing: Pytest
- Package Manager: pip

## Technical Decisions
- FastAPI was chosen for its asynchronous support, speed, and Pydantic integration.
- PostgreSQL is used as the relational database, accessed via SQLAlchemy Async ORM.
- Everything runs inside Docker containers, ensuring environment reproducibility and portability.
- A large JSON file containing vendor data is loaded on application startup using FastAPI’s lifespan event handler.
- The tests run against the real PostgreSQL database, seeded during application lifespan if empty.
- Search by proximity is implemented using basic Euclidean distance between latitude/longitude.
- docker-compose is used to orchestrate the app (web) and database (db) services.
- Startup delays (sleep) are used to ensure the database is ready before FastAPI boots up.

## Architecture
The project follows the Clean Architecture principles, separating the application into clear, layered modules:
- _domain/_ – Core business logic and entities (Vendor)
- _use_cases/_ – Application-level logic, orchestrating repositories and business rules
- _infrastructure/_ – External integrations like the database (SQLAlchemy, PostgreSQL)
- _interfaces/api/_ – HTTP layer using FastAPI, routers, DTOs, and Pydantic schemas

This structure ensures high maintainability, testability, and decoupling between external services and the core domain.

## Critique

### What I Would Have Done Differently With More Time
- Full-text search optimization for fields like applicant and address, leveraging PostgreSQL’s GIN indexes and to_tsvector.
- Pagination and caching on the list endpoints to improve responsiveness with large datasets.
- Validation and transformation layer to ensure the initial JSON data is always clean and normalized.
- Split the infrastructure to include a dedicated test database and possibly a staging environment.
- Implement unit tests for each file within its respective layer in the Clean Architecture structure.

### What Are the Trade-Offs I Have Made
- I used the same database instance for both the API and tests, which simplifies setup but sacrifices test isolation.
- I hardcoded some values (like status enum as strings instead of a fully normalized status table) to move faster.
- I chose FastAPI’s lifespan to load the data, which is efficient but it binds the environment initialization to the service lifecycle.
- I used a simplified Euclidean distance approach for proximity search. It’s suitable for small-scale areas like San Francisco but lacks the accuracy and efficiency of proper geospatial indexing or spherical calculations.

### What are the things you left out?
- Auth and Role-Based Access Control: No authentication, authorization, or user context was implemented.
- Admin or management endpoints to modify vendors, reindex, or control data ingest.
- CI/CD pipeline to lint, test, and deploy automatically.
- Monitoring: There’s no Prometheus/Grafana, logging configuration, or alerting in place.
- Rate limiting or protection against abuse on search endpoints.

### What Are the Problems With My Implementation, and How I’d Solve Them for Scalability
- Queries (especially geographic and partial-text search) could become expensive with many records.
  - FIX: Add indexes (GIN for text, composite for lat/lng), and use PostgreSQL cube/earthdistance or PostGIS for better spatial queries.
- The app runs on a single Uvicorn worker.
  - FIX: Deploy using multiple workers, possibly in a Kubernetes cluster with autoscaling.
- Loading data on startup doesn’t scale or work well in distributed environments.
  - FIX: Move to a proper data migration and seeding system, and run it separately.
- All queries hit the database directly.
  - FIX: Add a cache layer (Redis for example) for frequent queries or computed nearest vendors.
- Tests run against a live database that may be stateful.
  - FIX: Use a separate test DB container seeded from scratch before each test suite.

## Running the Project
Start the application using Docker Compose:
```
docker-compose up
```
The FastAPI application will be available at:
- http://localhost:8000

The PostgreSQL database will be accessible internally by other containers (not via browser) at:
- db:5432

Once the services are up, you can access the API documentation at:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

On startup, the FastAPI service will automatically load the initial dataset into the PostgreSQL database if it’s empty.

## Running Tests
To execute the test suite against the live application and database:
```
docker-compose exec web pytest tests/
```
This runs the tests inside the web container using _pytest_ and _pytest-asyncio_.





