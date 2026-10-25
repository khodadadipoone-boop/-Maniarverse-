from fastapi import FastAPI

app=FastAPI(
    title="Maniarverse API",
    description="Backend API for Maniarverse MVP",
    version="1.0.0"
)
@app.get("/")
def read_root():
    return {
        "project": "Maniarverse",
        "status": "online",
        "message": "Welcome to Maniarverse API v1"
    }