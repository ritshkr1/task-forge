import { useDroppable } from "@dnd-kit/core";

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  // Visual feedback when hovering over a column
  const bgStyle = isOver ? "bg-neutral-100/50 border-green-700 rounded'" : "";

  return (
    <div 
      ref={setNodeRef} 
      className={`flex-1 w-full flex flex-col min-h-[100px] transition-colors ${bgStyle} ${props.className || ''}`}
    >
      {props.children}
    </div>
  );
}