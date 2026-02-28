import { useState } from "react"

export function AddColumn() {
    const [isEditinng, setIsEditing] = useState<boolean>(false);
    
    if (!isEditinng) {
        return <button>
            <span>+</span> Add Column
        </button>
    }

    return 

}