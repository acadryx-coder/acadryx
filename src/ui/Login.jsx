// UI: Login.jsx
// School is already resolved from the URL before this renders.
// User just enters their access code — one step, done.

import { useState } from "react";
import { getUserByCode } from "../data/users.js";
import { Btn, Input } from "./components.jsx";

export default function Login({ school, onLogin }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  function handleSubmit() {
    const user = getUserByCode(school.code, code);
    if (!user) { setError("Access code not recognised. Contact your school administrator."); return; }
    setError("");
    onLogin(user);
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "var(--bg)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "24px 16px",
    }}>
      <div style={{ width: "100%", maxWidth: 400, animation: "fadeUp 0.4s ease forwards" }}>

        {/* School brand — this is THEIR app */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{
            width: 64, height: 64,
            background: "var(--brand)",
            borderRadius: 16,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 900, fontSize: 28,
            margin: "0 auto 16px",
            boxShadow: "0 8px 28px rgba(0,0,0,0.15)",
          }}>
            {school.name.charAt(0)}
          </div>
          <div style={{ fontWeight: 800, fontSize: 22, color: "var(--text-primary)" }}>
            {school.name}
          </div>
          <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 6 }}>
            {school.term} · {school.session}
          </div>
        </div>

        {/* Login card */}
        <div style={{
          background: "var(--surface)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border)",
          padding: "24px",
          boxShadow: "var(--shadow-sm)",
          marginBottom: 16,
        }}>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Welcome back</div>
          <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>
            Enter your access code to continue.
          </div>

          <Input
            label="Access Code"
            placeholder="e.g. STU001, ADM001, TCH001"
            value={code}
            onChange={e => { setCode(e.target.value); setError(""); }}
          />

          {error && (
            <div style={{ fontSize: 13, color: "#dc2626", marginTop: -8, marginBottom: 12 }}>
              ⚠ {error}
            </div>
          )}

          <Btn onClick={handleSubmit} disabled={!code.trim()} style={{ width: "100%" }} size="lg">
            Enter →
          </Btn>

          <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 12, textAlign: "center" }}>
            Don't have a code? Contact your school administrator.
          </div>
        </div>

        <div style={{ textAlign: "center", fontSize: 11, color: "var(--text-muted)" }}>
          Powered by <span style={{ color: "var(--brand)", fontWeight: 600 }}>Acadryx</span>
        </div>

      </div>
    </div>
  );
}
