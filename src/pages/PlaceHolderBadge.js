function PlaceholderBadge({ children, color = "#ef4444" }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "2px 8px",
      borderRadius: 9999,
      background: color,
      color: "#fff",
      fontSize: 12
    }}>{children}</span>
  );
}

export default PlaceholderBadge