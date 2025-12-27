from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict, Any
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

def is_dag(nodes: List[Dict[str, Any]], edges: List[Dict[str, Any]]) -> bool:
    # Build adjacency list
    adj = {node['id']: [] for node in nodes}
    for edge in edges:
        source = edge.get('source')
        target = edge.get('target')
        if source and target:
            adj[source].append(target)
    # DFS to detect cycles
    visited = set()
    rec_stack = set()
    def dfs(v):
        visited.add(v)
        rec_stack.add(v)
        for neighbor in adj.get(v, []):
            if neighbor not in visited:
                if dfs(neighbor):
                    return True
            elif neighbor in rec_stack:
                return True
        rec_stack.remove(v)
        return False
    for node in adj:
        if node not in visited:
            if dfs(node):
                return False
    return True

@app.get('/pipelines/parse')
def parse_pipeline(
    nodes: str = Query(..., description="JSON string of nodes"),
    edges: str = Query(..., description="JSON string of edges")
):
    try:
        nodes_list = json.loads(nodes)
        edges_list = json.loads(edges)
        print(edges_list, nodes_list)
        num_nodes = len(nodes_list)
        num_edges = len(edges_list)
        dag = is_dag(nodes_list, edges_list)
        return {
            "num_nodes": num_nodes,
            "num_edges": num_edges,
            "is_dag": dag
        }
    except Exception as e:
        return {"error": str(e)}
