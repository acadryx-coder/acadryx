import { useApp } from "../../context/AppContext";
import Header from "./Header";
import BottomNav from "./BottomNav";
import Sidebar from "./Sidebar";

export default function AppShell({ children }) {
  const { sidebarOpen } = useApp();

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Sidebar />

      <div
        className="main-area"
        style={{
          transition: "margin-left 0.25s ease",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />

        <main
          className="scrollable"
          style={{
            flex: 1,
            paddingBottom: "calc(var(--nav-height) + 16px)",
            overflowY: "auto",
          }}
        >
          {children}
        </main>

        <BottomNav />
      </div>

      <style>{`
        @media (min-width: 768px) {
          .main-area {
            margin-left: ${sidebarOpen ? "var(--sidebar-width)" : "0"};
          }
        }
      `}</style>
    </div>
  );
}
