# VectorShift Assignment

A full-stack pipeline editor built with React (frontend) and FastAPI (backend).  
Visually create, connect, and analyze node-based pipelines with real-time DAG validation.

---

## Project Structure

```
vectorshift-assignment/
│
├── backend/      # FastAPI backend (pipeline analysis API)
│   ├── main.py
│   └── README.md
│
├── frontend/     # React frontend (visual pipeline editor)
│   ├── src/
│   └── README.md
│
└── README.md     # (This file)
```

---

## Features

- **Visual Pipeline Editor:** Drag, drop, and connect nodes to build data flows.
- **Reusable Node Abstraction:** Easily add new node types with consistent styling and logic.
- **Dynamic Handles:** Text nodes auto-detect variables and add handles for them.
- **Backend Integration:** Submit your pipeline for analysis (node/edge count, DAG check).
- **Modern UI:** Styled with Tailwind CSS and ReactFlow.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd vectorshift-assignment
```

---

### 2. Backend Setup

```bash
cd backend
python3 -m venv venv
source venv/bin/activate        # On Windows: venv\Scripts\activate
pip install fastapi uvicorn
uvicorn main:app --reload
```

- The backend runs at: [http://127.0.0.1:8000](http://127.0.0.1:8000)
- See [backend/README.md](backend/README.md) for API details.

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

- The frontend runs at: [http://localhost:3000](http://localhost:3000)
- See [frontend/README.md](frontend/README.md) for folder and code details.

---

## API Endpoints

### Health Check

```
GET /    # Returns {"Ping": "Pong"}
```

### Pipeline Analysis

```
GET /pipelines/parse?nodes=[...]&edges=[...]
```
- **nodes**: JSON stringified array of node objects
- **edges**: JSON stringified array of edge objects
- **Returns:**  
  ```json
  {
    "num_nodes": 3,
    "num_edges": 2,
    "is_dag": true
  }
  ```

---

## Key Folders

- **backend/**: FastAPI app, CORS enabled for frontend, DAG analysis logic.
- **frontend/src/**:  
  - `App/`: Main app shell  
  - `Nodes/`: All node components (default and custom)  
  - `Store/`: Zustand state management  
  - `Styles/`: Tailwind and custom CSS  
  - `toolbar.js`, `ui.js`: Toolbar and ReactFlow canvas

---

## Notes

- The backend must be running before submitting pipelines from the frontend.
- CORS is enabled for local development.
- To add new node types, create a component in `Nodes/`, register it in `ui.js`, and add it to the toolbar.

---

## Troubleshooting

- **Backend not found?** Make sure you activated your virtual environment and installed dependencies.
- **CORS errors?** Ensure both servers are running on the correct ports.
- **Node/edge issues?** Check the browser console and backend logs for error details.

---

## Resources

- [FastAPI Docs](https://fastapi.tiangolo.com/)
- [ReactFlow Docs](https://reactflow.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)

---
