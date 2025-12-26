export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={`${type} cursor-grab min-w-[100px] h-[60px] flex items-center justify-center flex-col bg-white/20 border border-white backdrop-blur-md transition-all duration-200 hover:bg-white hover:scale-105 hover:text-black text-white`}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        draggable
      >
        <span className="text-lg drop-shadow">{label}</span>
      </div>
    );
};