
import { DragDropProvider } from "@dnd-kit/react";
import { useState } from "react";
import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";

function App() {   
   type Task = {
    id: string;
    title: string;
    label: string;
   };
  
  type TaskStates = {
    id: string;
    name: string; 
    color: string;
  };

  const initialTasks: Task[] = [
    { id: "t1", title: "Fix login bug", label: "st-1" },
    { id: "t2", title: "Design homepage", label: "st-2" },
    { id: "t3", title: "Write unit tests", label: "st-3" },
  ];

  const intitalTaskStates: TaskStates[] = [
    { id: "st-1", name: "To Do", color: "#f27c7c" },
    { id: "st-2", name: "In Progress", color: "#007bff" },
    { id: "st-3", name: "Completed", color: "#00ff99" },
  ];
  
  const [tasks, setTask] = useState<Task[]>(initialTasks);
  const [taskStates, setTaskStates] = useState<TaskStates[]>(intitalTaskStates);

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
      <div className="min-h-screen flex justify-evenly items-start p-4 gap-10">

        {taskStates.map((states, ind) => {
          return (<Droppable name={states.name} id={states.id} color={states.color}>
            {tasks.map((task, ind) => {
              if(task.label === states.id)
                return (<Draggable id={task.id}>{ task.title}</Draggable>)
            })}
          </Droppable>)
        })}
        
      </div>
    </DragDropProvider>
  );
}



export default App
