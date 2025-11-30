export default function SortButton({ title, onSort, direction }) {

    const handleSort = () => {
        onSort();
    };

    return (
        <button
            className={`sort-button ${direction || ""}`}
            onClick={handleSort}
            type="button"
        >
            {title}
            {direction && <span className="sort-arrow">
                ▲
            </span>}
        </button>
    );
}
