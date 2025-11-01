function Header() {
  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 12px",
      margin: "0",
      borderBottom: "1px solid var(--color-border)",
      position: "sticky",
      top: 0,
      background: "var(--color-surface)",
      zIndex: 10
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <img src="/logo.png" alt="Task Forge logo" style={{ height: 24, width: 24, objectFit: "contain", borderRadius: "50px" }} />
        <span style={{ fontWeight: 700, fontSize: 18, color: "var(--color-text)" }}>Task Forge</span>
      </div>
      
    </header>
  );
}

export default Header;


