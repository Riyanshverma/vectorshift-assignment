import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div className="p-2.5 w-full flex justify-center bg-black">
            <div className="w-full max-w-4xl flex items-center justify-between bg-black backdrop-blur-md rounded-2xl px-6 py-4 border-2 border-white">
                <div className="flex flex-wrap gap-3">
                    <DraggableNode type='customInput' label='Input' />
                    <DraggableNode type='llm' label='LLM' />
                    <DraggableNode type='customOutput' label='Output' />
                    <DraggableNode type='text' label='Text' />
                </div>
                <button
                    type="submit"
                    className="ml-4 px-6 py-2 border border-white text-white font-normal shadow-md rounded-xl hover:bg-white hover:text-black"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};