import { useDraggable } from "@dnd-kit/core";

export function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: props.id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: 999, // Ensure dragged item floats above others
        opacity: isDragging ? 0.6 : 1,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      // Added w-full to ensure it takes column width
      // Changed to div because nesting a div (card) inside a button is invalid HTML
      className="w-full touch-none border-green-700 cursor-grab active:cursor-grabbing focus:outline-none"
    >
      {props.children}
    </div>
  );
}