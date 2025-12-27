# VectorShift Assignment Frontend

This is the React frontend for the VectorShift assignment. It provides a visual pipeline editor with draggable, customizable nodes and integrates with the FastAPI backend.

---

## Folder Structure

```
src/
│
├── App/                # Main App component
│   └── App.js
│
├── Nodes/              # All node components
│   ├── baseNode.js     # The reusable base node abstraction
│   │
│   ├── Custom-Nodes/   # Custom node types for demonstration
│   │   ├── delayNode.js
│   │   ├── httpNode.js
│   │   ├── mathNode.js
│   │   ├── mergeNode.js
│   │   └── switchNode.js
│   │
│   └── Default-Nodes/  # Default node types (core functionality)
│       ├── inputNode.js
│       ├── llmNode.js
│       ├── outputNode.js
│       └── textNode.js
│
├── Store/              # Zustand store for global state management
│   └── store.js
│
├── Styles/             # Global styles (Tailwind, custom CSS)
│   └── index.css
│
├── draggableNode.js    # Draggable node component for the toolbar
├── index.js            # Entry point for React app
├── toolbar.js          # PipelineToolbar component (node palette + submit)
└── ui.js               # PipelineUI component (ReactFlow canvas)
```

---

## File/Folder Descriptions

- **App/**: Contains the main `App.js` which renders the toolbar and the pipeline UI.
- **Nodes/**: All node components.
  - **baseNode.js**: The core abstraction for all nodes (handles layout, style, and handles).
  - **Custom-Nodes/**: Example nodes (Math, Merge, Delay, HTTP, Switch) to demonstrate reusability.
  - **Default-Nodes/**: Core nodes (Input, Output, LLM, Text) used in the pipeline.
- **Store/**: Zustand store for managing nodes, edges, and pipeline state.
- **Styles/**: Global styles, including Tailwind CSS and custom overrides.
- **draggableNode.js**: Component for draggable node buttons in the toolbar.
- **toolbar.js**: The top toolbar with node palette and submit button.
- **ui.js**: Main ReactFlow canvas and logic for rendering/editing the pipeline.
- **index.js**: React app entry point.

---

## Getting Started

### 1. Install Dependencies

Navigate to the `frontend` directory and run:

```bash
npm install
```

### 2. Start the Development Server

```bash
npm start
```

- The app will be available at: [http://localhost:3000](http://localhost:3000)
- The page will reload automatically on code changes.

---

## Features

- Drag and drop nodes from the toolbar to the canvas.
- Connect nodes to build a pipeline visually.
- Custom and default node types, all using a shared base abstraction.
- Text node supports dynamic handles for variables (`{{variable}}`).
- Submit pipeline to backend and receive DAG analysis.

---

## Backend Integration

- Make sure the backend (FastAPI) is running at [http://127.0.0.1:8000](http://127.0.0.1:8000).
- On clicking **Submit**, the current pipeline is sent to the backend for analysis.

---

## Notes

- The project uses [ReactFlow](https://reactflow.dev/) for the visual editor.
- State management is handled by [Zustand](https://zustand-demo.pmnd.rs/).
- Styling is done with [Tailwind CSS](https://tailwindcss.com/).

---

## Troubleshooting

- If you see CORS errors, ensure the backend is running and CORS is enabled for `http://localhost:3000`.
- If you add new node types, register them in `ui.js` and add them to the toolbar.

---

