
import { DragDropProvider, useDraggable, useDroppable } from "@dnd-kit/react";
import { useState } from "react";
import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";

function App() {   
   type Task = {
    id: string;
    title: string;
    label: "todo" | "in-progress" | "completed";
  };
  const initialTasks: Task[] = [
    { id: "t1", title: "Fix login bug", label: "todo" },
    { id: "t2", title: "Design homepage", label: "in-progress" },
    { id: "t3", title: "Write unit tests", label: "completed" },
  ];
  
  const [tasks, setTask] = useState<Task[]>(initialTasks);

  function handledrop(event: any) {
    const { source, target } = event.operation;
    if (!target) return;

    const taskId = source.id;
    const newId = target.id;
    console.log(taskId, newId);
    

    setTask((prev) => prev?.map((task) => task.id === taskId ? { ...task, label: newId } : task));


  }
  return (
    <DragDropProvider onDragEnd={handledrop}>
      <div className="flex p-4">
        <Droppable name="todo">
          {tasks.map((task) => {
            if (task.label === "todo") {
              return <Draggable name={task.id}>{task.title}</Draggable>;
            }
          })}
        </Droppable>
        <Droppable name="in-progress">
          {tasks.map((task) => {
            if (task.label === "in-progress") {
              return <Draggable name={task.id}>{task.title}</Draggable>;
            }
          })}
        </Droppable>
        <Droppable name="completed">
          {tasks.map((task) => {
            if (task.label === "completed") {
              return <Draggable name={task.id}>{task.title}</Draggable>;
            }
          })}
        </Droppable>
      </div>
    </DragDropProvider>
  );
}



export default App
