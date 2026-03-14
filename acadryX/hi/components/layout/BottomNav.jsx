import { useApp } from "../../context/AppContext";

export default function BottomNav() {
  const { nav, activeTab, setActiveTab } = useApp();

  return (
    <>
      <nav style={{
        position: "fixed",
        bottom: 0, left: 0, right: 0,
        height: "var(--nav-height)",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        zIndex: 50,
        paddingBottom: "env(safe-area-inset-bottom)",
      }} className="bottom-nav">
        {nav.map(item => {
          const active = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
                background: "none",
                border: "none",
                padding: "6px 4px",
                cursor: "pointer",
                color: active ? "var(--brand)" : "var(--text-muted)",
                transition: "color 0.2s",
              }}
            >
              <span style={{ fontSize: 20, lineHeight: 1 }}>{item.icon}</span>
              <span style={{
                fontSize: 10,
                fontWeight: active ? 600 : 400,
                letterSpacing: 0.2,
              }}>{item.label}</span>
              {active && (
                <span style={{
                  position: "absolute",
                  bottom: 0,
                  width: 20,
                  height: 2.5,
                  background: "var(--brand)",
                  borderRadius: 2,
                  marginTop: "auto",
                }} />
              )}
            </button>
          );
        })}
      </nav>

      <style>{`
        @media (min-width: 768px) {
          .bottom-nav {
            left: var(--sidebar-width) !important;
          }
        }
      `}</style>
    </>
  );
}
