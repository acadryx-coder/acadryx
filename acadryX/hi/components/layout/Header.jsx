import { useApp } from "../../context/AppContext";
import { Avatar } from "../ui";

export default function Header() {
  const { user, school, setSidebarOpen, sidebarOpen } = useApp();

  return (
    <header style={{
      height: "var(--header-height)",
      background: "var(--surface)",
      borderBottom: "1px solid var(--border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 16px",
      position: "sticky",
      top: 0,
      zIndex: 50,
      gap: 12
    }}>
      {/* Left — sidebar toggle on desktop, brand on mobile */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            background: "none", border: "none", padding: 6,
            borderRadius: "var(--radius-sm)", cursor: "pointer",
            display: "none",
            color: "var(--text-secondary)", fontSize: 20,
            // visible on desktop via CSS class
          }}
          className="sidebar-toggle"
        >
          ☰
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 28, height: 28,
            background: "var(--brand)",
            borderRadius: 6,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 800, fontSize: 12
          }}>A</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: "var(--text-primary)", lineHeight: 1.2 }}>
              {school?.name || "Acadryx"}
            </div>
            {user && (
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)} Portal
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <button style={{
          background: "none", border: "none", fontSize: 18,
          cursor: "pointer", position: "relative", padding: 4
        }}>
          🔔
          <span style={{
            position: "absolute", top: 2, right: 2,
            width: 8, height: 8, background: "var(--brand)",
            borderRadius: "50%", border: "2px solid var(--surface)"
          }} />
        </button>
        {user && <Avatar initials={user.initials} size={32} />}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .sidebar-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
