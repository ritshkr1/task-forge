import { useState } from "react";

export default function SortButton({ children,onSort }) {
  const [direction, setDirection] = useState(null); // 'asc' | 'desc' | null

  const handleSort = () => {
    const nextDirection = direction === "asc" ? "desc" : "asc";
    setDirection(nextDirection);
    onSort(nextDirection);
  };

  return (
    <button
      className={`sort-button ${direction || ""}`}
      onClick={handleSort}
      type="button"
    >
      {children}
      <span className="sort-arrow">
        {direction === "asc" ? "▲" : direction === "desc" ? "▼" : ""}
      </span>
    </button>
  );
}
