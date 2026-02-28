import { useDroppable } from "@dnd-kit/react";

interface PropType {
  children?: React.ReactNode;
  name: string;
  id: string;
  color: string;
}
export function Droppable({ children, name, id, color }: PropType) {
  const { ref } = useDroppable({
    id: id,
  });
  return (
    <div ref={ref} className="border rounded bg-neutral-100 min-h-44 min-w-3xs">
      <div className="flex items-center gap-2 ml-2">
        <div
          className="rounded-full size-2"
          style={{ backgroundColor: color }}
        ></div>
        <h1 className={`rounded-md`}>{name}</h1>
      </div>

      {children}
    </div>
  );
}
