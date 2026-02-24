import { useDroppable } from "@dnd-kit/react"

interface PropType {
    children?: React.ReactNode,
    name: string
}
export function Droppable({ children, name }: PropType) {
    const { ref } = useDroppable({
        id: name
    })
    return <div ref={ref} className="border rounded">
        <h1 className=" bg-gray-300 rounded-md">{ name}</h1>
        {children}</div>
}