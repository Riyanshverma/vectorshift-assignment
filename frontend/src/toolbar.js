import { DraggableNode } from './draggableNode';
import { useStore } from './Store/store';

export const PipelineToolbar = () => {
    const { nodes, edges } = useStore(state => ({ nodes: state.nodes, edges: state.edges }));

    const handleSubmit = async () => {
        try {
            const params = new URLSearchParams({
                nodes: JSON.stringify(nodes),
                edges: JSON.stringify(edges),
            });
            const response = await fetch(`http://127.0.0.1:8000/pipelines/parse?${params.toString()}`);
            const data = await response.json();
            alert(
                `Nodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nIs DAG: ${data.is_dag ? "Yes" : "No"}`
            );
        } catch (error) {
            alert("Error submitting pipeline: " + error);
        }
    }
    return (
        <div className="p-2.5 w-full flex justify-center bg-gradient-to-r from-[#7b2ff2] via-[#f357a8] to-[#7b2ff2]">
            <div className="w-full max-w-7xl flex items-center justify-between bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border-2 border-white/30 shadow-lg">
                <div className="flex flex-wrap gap-3">
                    <DraggableNode type='customInput' label='Input' />
                    <DraggableNode type='llm' label='LLM' />
                    <DraggableNode type='customOutput' label='Output' />
                    <DraggableNode type='text' label='Text' />
                    <DraggableNode type="math" label="Math" />
                    <DraggableNode type="merge" label="Merge" />
                    <DraggableNode type="delay" label="Delay" />
                    <DraggableNode type="http" label="HTTP" />
                    <DraggableNode type="switch" label="Switch" />
                </div>
                <button
                    type="submit"
                    className="ml-4 px-6 py-2 border border-white text-white font-normal shadow-md rounded-xl hover:bg-white hover:text-black"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};