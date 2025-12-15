export default function SortButton({ title, onSort, direction }) {
    return <button
            className={`sort-button ${direction || ""}`}
     onClick={onSort}
            type="button"
        >
            {title}
            {direction && <span className="sort-arrow">
                ▲
            </span>}
        </button>

}
