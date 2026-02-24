import { useDraggable } from "@dnd-kit/react"

interface Proptype {
    children: React.ReactNode,
    name: string
}
export function Draggable({ children, name }: Proptype) {
    const { ref } = useDraggable({
        id: name
    })
    return <div ref={ref}>{children}</div>
}