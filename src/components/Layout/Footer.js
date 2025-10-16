import React from "react";

function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--color-border)",
      padding: "12px 16px",
      color: "var(--color-text)",
      background: "var(--color-surface)",
    }}>
      <small>© {new Date().getFullYear()} Task Forge</small>
    </footer>
  );
}

export default Footer;


