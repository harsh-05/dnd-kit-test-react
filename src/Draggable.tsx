import { useDraggable } from "@dnd-kit/react"

interface Proptype {
    children: React.ReactNode,
    id: string
}
export function Draggable({ children, id }: Proptype) {
    const { ref } = useDraggable({
        id: id
    })
    return <div ref={ref}>{children}</div>
}