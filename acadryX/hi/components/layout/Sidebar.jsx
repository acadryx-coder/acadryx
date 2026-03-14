import { useApp } from "../../context/AppContext";
import { Avatar } from "../ui";

export default function Sidebar() {
  const { user, school, nav, activeTab, setActiveTab, sidebarOpen, logout } = useApp();

  return (
    <>
      {/* Overlay on mobile when sidebar somehow opens */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => {}}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.3)",
            zIndex: 59,
            display: "none",
          }}
        />
      )}

      <aside
        className={`sidebar ${sidebarOpen ? "open" : "closed"}`}
        style={{
          position: "fixed",
          top: 0, left: 0, bottom: 0,
          width: "var(--sidebar-width)",
          background: "var(--surface)",
          borderRight: "1px solid var(--border)",
          zIndex: 60,
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.25s ease",
          overflowY: "auto",
        }}
      >
        {/* Brand */}
        <div style={{
          padding: "20px 16px 16px",
          borderBottom: "1px solid var(--border)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 34, height: 34,
              background: "var(--brand)",
              borderRadius: 8,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 800, fontSize: 16
            }}>A</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>Acadryx</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{school?.name}</div>
            </div>
          </div>
        </div>

        {/* User info */}
        {user && (
          <div style={{
            padding: "14px 16px",
            borderBottom: "1px solid var(--border)",
            display: "flex", alignItems: "center", gap: 10
          }}>
            <Avatar initials={user.initials} size={38} />
            <div>
              <div style={{ fontWeight: 600, fontSize: 13 }}>{user.name}</div>
              <div style={{ fontSize: 11, color: "var(--brand)", fontWeight: 500 }}>
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
              </div>
            </div>
          </div>
        )}

        {/* Nav items */}
        <nav style={{ flex: 1, padding: "10px 8px" }}>
          {nav.map(item => {
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 12px",
                  borderRadius: "var(--radius-sm)",
                  background: active ? "var(--brand-light)" : "none",
                  border: "none",
                  color: active ? "var(--brand)" : "var(--text-secondary)",
                  fontWeight: active ? 600 : 400,
                  fontSize: 14,
                  cursor: "pointer",
                  marginBottom: 2,
                  textAlign: "left",
                  transition: "background 0.15s, color 0.15s",
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.background = "var(--surface-2)"; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.background = "none"; }}
              >
                <span style={{ fontSize: 18 }}>{item.icon}</span>
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div style={{ padding: "12px 8px", borderTop: "1px solid var(--border)" }}>
          <button
            onClick={logout}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 12px",
              borderRadius: "var(--radius-sm)",
              background: "none", border: "none",
              color: "var(--text-muted)",
              fontSize: 14, cursor: "pointer",
              textAlign: "left",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "var(--surface-2)"}
            onMouseLeave={e => e.currentTarget.style.background = "none"}
          >
            🚪 Logout
          </button>
        </div>
      </aside>

      <style>{`
        .sidebar {
          transform: translateX(-100%);
        }

        @media (min-width: 768px) {
          .sidebar {
            transform: translateX(0) !important;
          }
          .sidebar.closed {
            transform: translateX(-100%) !important;
          }
          .sidebar.open {
            transform: translateX(0) !important;
          }
        }
      `}</style>
    </>
  );
}
