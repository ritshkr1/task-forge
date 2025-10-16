import React from "react";

function Header() {
  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 12px",
      borderBottom: "1px solid var(--color-border)",
      position: "sticky",
      top: 0,
      background: "var(--color-surface)",
      zIndex: 10
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontWeight: 700, fontSize: 18, color: "var(--color-text)" }}>Task Forge</span>
      </div>
      <nav style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <button className="btn btn-accent">New Task</button>
      </nav>
    </header>
  );
}

export default Header;


