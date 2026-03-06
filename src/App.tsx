import { useState } from "react";
import { KanbanBoard } from "./KanbanBoard";

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

  return (
    <div className="min-h-screen bg-gray-300 overflow-auto ">
     <KanbanBoard></KanbanBoard>
    </div>
  );
}



export default App
