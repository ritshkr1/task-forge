function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--color-border)",
      padding: "5px 50px",
      color: "var(--color-text)",
      background: "var(--color-surface)",
    }}>
      <small>© {new Date().getFullYear()} Task Forge created by <a className="link-plain" href="https://github.com/riteshkrdev" target="_blank" rel="noopener noreferrer">Ritesh Kumar</a> </small>
    </footer>
  );
}

export default Footer;


