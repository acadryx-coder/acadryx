import { useState } from "react";
import { useApp } from "../context/AppContext";
import { Btn, Input } from "../components/ui";

const ROLES = [
  { id: "student", label: "Student", icon: "🎒", sub: "Results, timetable, magazine" },
  { id: "parent", label: "Parent", icon: "👨‍👩‍👧", sub: "Ward progress & fees" },
  { id: "teacher", label: "Teacher", icon: "📋", sub: "Classes, scores, attendance" },
  { id: "admin", label: "Admin", icon: "⚙️", sub: "Full school management" },
  { id: "alumni", label: "Alumni", icon: "🎓", sub: "Stay connected to your school" },
];

export default function Login() {
  const { login } = useApp();
  const [selectedRole, setSelectedRole] = useState(null);
  const [code, setCode] = useState("");

  const handleLogin = () => {
    if (!selectedRole) return;
    login(selectedRole, {
      name: "Your School Name",
      code: "KIS001",
      brandColor: "#1a6bff",
    });
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "var(--bg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px 16px",
    }}>
      <div style={{
        width: "100%",
        maxWidth: 420,
        animation: "fadeUp 0.4s ease forwards",
      }}>
        {/* Brand */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{
            width: 56, height: 56,
            background: "var(--brand)",
            borderRadius: 14,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 900, fontSize: 24,
            margin: "0 auto 14px",
            boxShadow: "0 8px 24px rgba(26,107,255,0.3)",
          }}>A</div>
          <div style={{ fontWeight: 800, fontSize: 22, color: "var(--text-primary)" }}>Acadryx</div>
          <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>Welcome back. Choose your role to continue.</div>
        </div>

        {/* Role Selection */}
        <div style={{
          background: "var(--surface)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border)",
          overflow: "hidden",
          marginBottom: 16,
          boxShadow: "var(--shadow-sm)",
        }}>
          {ROLES.map((role, i) => (
            <div
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "14px 18px",
                cursor: "pointer",
                borderBottom: i < ROLES.length - 1 ? "1px solid var(--border)" : "none",
                background: selectedRole === role.id ? "var(--brand-light)" : "transparent",
                transition: "background 0.15s",
              }}
              onMouseEnter={e => { if (selectedRole !== role.id) e.currentTarget.style.background = "var(--surface-2)"; }}
              onMouseLeave={e => { if (selectedRole !== role.id) e.currentTarget.style.background = "transparent"; }}
            >
              <div style={{
                width: 40, height: 40,
                background: selectedRole === role.id ? "var(--brand)" : "var(--surface-2)",
                borderRadius: "var(--radius-sm)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18, transition: "background 0.15s",
                flexShrink: 0,
              }}>{role.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontWeight: 600, fontSize: 14,
                  color: selectedRole === role.id ? "var(--brand)" : "var(--text-primary)",
                }}>{role.label}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{role.sub}</div>
              </div>
              {selectedRole === role.id && (
                <div style={{
                  width: 20, height: 20,
                  background: "var(--brand)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontSize: 11, fontWeight: 700,
                }}>✓</div>
              )}
            </div>
          ))}
        </div>

        {/* School Code */}
        <div style={{
          background: "var(--surface)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--border)",
          padding: "16px 18px",
          marginBottom: 16,
          boxShadow: "var(--shadow-sm)",
        }}>
          <Input
            label="School Code"
            placeholder="Enter your school code..."
            value={code}
            onChange={e => setCode(e.target.value)}
          />
          <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: -8 }}>
            No code? Contact your school administrator.
          </div>
        </div>

        <Btn
          onClick={handleLogin}
          disabled={!selectedRole}
          size="lg"
          extraStyle={{ width: "100%" }}
          style={{ width: "100%" }}
        >
          Continue →
        </Btn>

        <div style={{ textAlign: "center", marginTop: 20, fontSize: 12, color: "var(--text-muted)" }}>
          Powered by <span style={{ color: "var(--brand)", fontWeight: 600 }}>Acadryx</span> · School infrastructure, simplified
        </div>
      </div>
    </div>
  );
}
