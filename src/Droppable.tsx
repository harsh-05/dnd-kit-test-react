import { useDroppable } from "@dnd-kit/react"

interface PropType {
    children?: React.ReactNode,
    name: string,
    id: string,
    color: string
}
export function Droppable({ children, name, id, color }: PropType) {
    const { ref } = useDroppable({
        id: id
    })
    return <div ref={ref} className="border rounded">
        <h1 className={`rounded-md`}
            style={{ backgroundColor: `${color}`} }
        >{name}</h1>
        {children}</div>
}