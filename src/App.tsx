
import { DragDropProvider, useDraggable, useDroppable } from "@dnd-kit/react";
import { useState } from "react";

function App() {
  
  const [isDropped, setIsDropped] = useState(false);
 

    

  return (
    <DragDropProvider
      onDragEnd={(event) => {
        if (event.canceled) return;

        const { target } = event.operation;
        setIsDropped(target?.id === "droppable");
      }}
    >

      {!isDropped && <Draggable />}
      <Droppable id="Droppable">{isDropped && <Draggable />}</Droppable>
    </DragDropProvider>
  );
}

function Draggable() {
  const { ref } = useDraggable({
    id: "draggable",
  });

  return (
    <button
      ref={ref}
      className="bg-neutral-800 rounded-md  text-white  py-2 px-6"
    > Draggable
    </button>
  );
}


function Droppable({ id, children }) {
  const { ref } = useDroppable({
    id,
  });

  return (
    <div ref={ ref} className="size-64 bg-neutral-300 border hover:border-blue-300 rounded-md">{ children}</div>
  );
}

export default App
