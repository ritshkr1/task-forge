export default function StatusLabel({ status }) {
    const className = `status status-${status.toLowerCase()}`;
    return <span className={className}>{status}</span>;
}