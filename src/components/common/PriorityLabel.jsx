export default function PriorityLabel({ priority }) {
    const className = `priority priority-${priority.toLowerCase()}`;
    return <span className={className}>{priority}</span>
}