import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "../../pages/Dashboard";

function Layout() {
  return (
    <div style={{
      height: "100svh",
      display: "flex",
      flexDirection: "column",
      background: "var(--color-bg)"
    }}>
      <Header />
      <main style={{ flex: 1, padding: "16px", overflowY: "auto", minHeight: 0 }}>
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;


