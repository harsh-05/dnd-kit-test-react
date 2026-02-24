import { useDroppable } from "@dnd-kit/react"

interface PropType {
    children?: React.ReactNode,
    name: string
}
export function Droppable({ children, name }: PropType) {
    const { ref } = useDroppable({
        id: name
    })
    return <div ref={ref}>
        <h1>{ name}</h1>
        {children}</div>
}