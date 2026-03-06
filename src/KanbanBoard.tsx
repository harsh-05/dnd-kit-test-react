import { useState } from "react";
import { PlusIcon } from "./Icons";
import type { Column } from "./types";

export function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([]);

    function generateColumn() { 
        const id = crypto.randomUUID();
        setColumns((prev) => ([...prev, {id, name: 'Default (Click to Change)'  }]))
    }

  return (
    <div className="flex gap-4 py-4 ">
      {columns.map((card, ind) => {
        return (
          <div
            className={`min-w-68 max-w-68 min-h-24 bg-[#F1F2F4] rounded-md`}
            key={card.id}
            >
                <div><input type="text" value={card.name} /></div>
          </div>
        );
      })}
      <button
        onClick={generateColumn}
        className=" border rounded-md min-w-68 min-h-12 max-h-12 flex items-center gap-2 border-neutral-50 bg-white/25 cursor-pointer hover:bg-white"
      >
        <PlusIcon></PlusIcon> Add Column
      </button>
    </div>
  );
}
