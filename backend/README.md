# VectorShift Assignment Backend

This is the FastAPI backend for the VectorShift assignment. It provides endpoints for pipeline parsing and supports CORS for local frontend development.

---

## Features

- FastAPI-based backend
- CORS enabled for local frontend (http://localhost:3000)
- `/pipelines/parse` endpoint: Accepts pipeline nodes and edges, returns node/edge count and DAG check

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd vectorshift-assignment/backend
```

### 2. Create and Activate a Virtual Environment

**On macOS/Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
```

**On Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install fastapi uvicorn
```

---

## Running the Backend

Start the FastAPI server with:

```bash
uvicorn main:app --reload
```

If `uvicorn` is not found, use:

```bash
python3 -m uvicorn main:app --reload
```

The backend will be available at:  
**http://127.0.0.1:8000**

---

## API Endpoints

### 1. Health Check

**GET /**

- **Description:** Simple ping endpoint.
- **Response:**  
  ```json
  { "Ping": "Pong" }
  ```

---

### 2. Parse Pipeline

**GET /pipelines/parse**

- **Description:**  
  Accepts pipeline nodes and edges as JSON strings in query parameters. Returns the number of nodes, number of edges, and whether the pipeline forms a Directed Acyclic Graph (DAG).

- **Query Parameters:**
  - `nodes` (str): JSON stringified list of node objects
  - `edges` (str): JSON stringified list of edge objects

- **Example Request:**
  ```
  GET http://localhost:8000/pipelines/parse?nodes=[{"id":"1"}]&edges=[{"source":"1","target":"2"}]
  ```

- **Response:**
  ```json
  {
    "num_nodes": 3,
    "num_edges": 2,
    "is_dag": true
  }
  ```

---

## Notes

- Make sure the backend is running before using the frontend.
- The backend is configured to accept requests from `http://localhost:3000` only (the default React dev server).
- If you add new dependencies, install them in your virtual environment.

---

## Useful Links

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Uvicorn Documentation](https://www.uvicorn.org/)

---

## Troubleshooting

- If you get `ModuleNotFoundError`, ensure your virtual environment is activated and dependencies are installed.
- If CORS errors occur, check that the frontend is running on `http://localhost:3000`.

---