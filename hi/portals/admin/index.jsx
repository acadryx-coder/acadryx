import { useState } from "react";
import { useApp } from "../../context/AppContext";
import { Card, StatCard, SectionHeader, Badge, Btn, ListItem, Avatar } from "../../components/ui";

function AdminHome({ setTab }) {
  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontWeight: 700, fontSize: 20 }}>School Overview 🏫</div>
        <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Kogbodi Intl. · 2nd Term · 2024/2025</div>
      </div>

      {/* Balance warning */}
      <Card style={{ background: "rgba(245,158,11,0.08)", border: "1.5px solid rgba(245,158,11,0.3)", marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#92400e" }}>⚠️ Outstanding Balance</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#b45309", marginTop: 4 }}>₦247,000</div>
            <div style={{ fontSize: 12, color: "#92400e", marginTop: 2 }}>247 students × ₦1,000 · Expires in 284 days</div>
          </div>
          <Btn size="sm" style={{ background: "#f59e0b", color: "#fff", border: "none" }}>Pay Now</Btn>
        </div>
      </Card>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
        <StatCard label="Total Students" value="1,247" sub="↑ +34 this term" icon="👨‍🎓" />
        <StatCard label="Teaching Staff" value="68" sub="↑ +3 new" icon="👩‍🏫" />
        <StatCard label="Avg Attendance" value="91%" trend="↓ -2% vs last term" />
        <StatCard label="Pending Approvals" value="8" sub="Review now" icon="📝" />
      </div>

      {/* Quick actions */}
      <SectionHeader title="Quick Actions" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
        {[
          { icon: "📊", label: "Review & Publish Results", onClick: () => setTab("results") },
          { icon: "📰", label: "Approve Magazine", onClick: () => setTab("magazine") },
          { icon: "👤", label: "Create New User", onClick: () => {} },
          { icon: "📢", label: "Launch New Event", onClick: () => {} },
          { icon: "📅", label: "Configure Timetable", onClick: () => {} },
          { icon: "⚙️", label: "School Settings", onClick: () => setTab("settings") },
        ].map((a, i) => (
          <Card key={i} onClick={a.onClick} style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px" }}>
            <div style={{ fontSize: 22 }}>{a.icon}</div>
            <div style={{ fontWeight: 500, fontSize: 13, lineHeight: 1.3 }}>{a.label}</div>
          </Card>
        ))}
      </div>

      {/* Insight */}
      <Card style={{ background: "var(--brand-light)", border: "1px solid var(--brand-mid)" }}>
        <div style={{ fontSize: 12, color: "var(--brand)", fontWeight: 600, marginBottom: 6 }}>💡 Acadryx Insight</div>
        <div style={{ fontWeight: 700, fontSize: 16, color: "var(--brand)" }}>Save ₦490,000/year</div>
        <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 4 }}>Switch to the Acadryx digital magazine. Same quality, zero printing cost.</div>
      </Card>
    </div>
  );
}

function AdminResults() {
  const [showConfirm, setShowConfirm] = useState(false);

  const classes = [
    { name: "SSS 2A — All Subjects", status: "ready", scores: "42/42", subjects: "9/9" },
    { name: "SSS 2B — All Subjects", status: "ready", scores: "38/38", subjects: "9/9" },
    { name: "SSS 1A — All Subjects", status: "pending", scores: "40/40", subjects: "7/9" },
    { name: "JSS 3A — All Subjects", status: "incomplete", scores: "47/47", subjects: "4/9" },
    { name: "JSS 2A — All Subjects", status: "ready", scores: "44/44", subjects: "8/8" },
  ];

  const statusConfig = {
    ready: { label: "Ready", color: "#16a34a", bg: "rgba(22,163,74,0.1)" },
    pending: { label: "Pending", color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
    incomplete: { label: "Incomplete", color: "#dc2626", bg: "rgba(220,38,38,0.1)" },
  };

  const readyCount = classes.filter(c => c.status === "ready").length;

  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <SectionHeader title="Result Review" />

      <Card style={{ background: "var(--brand)", marginBottom: 16 }}>
        <div style={{ color: "#fff" }}>
          <div style={{ fontWeight: 600, fontSize: 14 }}>{readyCount} classes ready to publish</div>
          <div style={{ fontSize: 12, opacity: 0.8, marginTop: 2 }}>1,047 students · ₦1,047,000 will be charged</div>
        </div>
        <Btn onClick={() => setShowConfirm(true)} style={{ marginTop: 12, background: "#fff", color: "var(--brand)", border: "none", fontWeight: 700, padding: "10px 20px", borderRadius: "var(--radius-sm)", cursor: "pointer", fontSize: 14, width: "100%" }}>
          🚀 Publish All Ready Classes
        </Btn>
      </Card>

      <Card style={{ padding: "8px 16px" }}>
        {classes.map((c, i) => {
          const s = statusConfig[c.status];
          return (
            <div key={i} style={{ padding: "14px 0", borderBottom: i < classes.length - 1 ? "1px solid var(--border)" : "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{c.name}</div>
                <Badge color={s.color} bg={s.bg}>{s.label}</Badge>
              </div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>
                {c.scores} scores entered · {c.subjects} subjects complete
              </div>
            </div>
          );
        })}
      </Card>

      {/* Confirm modal */}
      {showConfirm && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }} onClick={() => setShowConfirm(false)}>
          <div style={{ background: "var(--surface)", borderRadius: "var(--radius-lg)", padding: 28, maxWidth: 380, width: "100%" }} onClick={e => e.stopPropagation()}>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 12 }}>Confirm Publication</div>
            <div style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 20 }}>
              You are about to publish results for <strong>{readyCount} classes</strong> and <strong>1,047 students</strong>.<br /><br />
              This will add <strong>₦1,047,000</strong> to your Acadryx balance. Results become permanently immutable.
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <Btn variant="ghost" onClick={() => setShowConfirm(false)} style={{ flex: 1 }}>Cancel</Btn>
              <Btn onClick={() => setShowConfirm(false)} style={{ flex: 2 }}>Publish Now — ₦1,047,000</Btn>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AdminStudents() {
  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 20 }}>
        <StatCard label="Students" value="1,250" />
        <StatCard label="Parents" value="320" />
        <StatCard label="Teachers" value="85" />
      </div>
      <SectionHeader title="Recent Students" action="Add New" />
      <Card style={{ padding: "8px 16px" }}>
        {["Adeyemi, Blessing", "Chukwuemeka, Obi", "Dankwa, Emeka", "Fagbemi, Ife", "Garba, Aminu"].map((s, i, arr) => (
          <ListItem key={i}
            left={<Avatar initials={s.split(",")[0].substring(0, 2).toUpperCase()} size={38} />}
            title={s} sub={`SSS 2A · Admitted 2022`}
            right={<span style={{ fontSize: 18, color: "var(--text-muted)" }}>›</span>}
            onClick={() => {}} divider={i < arr.length - 1}
          />
        ))}
      </Card>
    </div>
  );
}

function AdminMagazine() {
  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <SectionHeader title="Magazine Management" />
      <Card style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div style={{ fontWeight: 600 }}>The Kogbodi Times — Vol XIV</div>
          <Badge>Published</Badge>
        </div>
        <div style={{ fontSize: 13, color: "var(--text-muted)" }}>1,247 readers · Published Jan 2025</div>
      </Card>
      <SectionHeader title="Pending Approvals" />
      <Card style={{ padding: "8px 16px" }}>
        {["Science fair write-up — Chidi Eze", "New poem submission — Fatima Musa", "Sports article — Taiwo Adamu"].map((a, i, arr) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none" }}>
            <div style={{ fontSize: 14, fontWeight: 500 }}>{a}</div>
            <div style={{ display: "flex", gap: 6 }}>
              <Btn variant="secondary" size="sm">Approve</Btn>
              <Btn variant="danger" size="sm">Reject</Btn>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}

function AdminSettings() {
  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <SectionHeader title="School Settings" />
      <Card style={{ marginBottom: 16 }}>
        <div style={{ fontWeight: 600, marginBottom: 16 }}>Brand Color</div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {["#1a6bff", "#7c3aed", "#059669", "#dc2626", "#d97706", "#0891b2"].map(c => (
            <div key={c} onClick={() => document.documentElement.style.setProperty("--brand", c)}
              style={{ width: 36, height: 36, borderRadius: "50%", background: c, cursor: "pointer", border: "3px solid transparent", transition: "border 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.border = "3px solid rgba(0,0,0,0.3)"}
              onMouseLeave={e => e.currentTarget.style.border = "3px solid transparent"}
            />
          ))}
        </div>
        <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 10 }}>Click to preview brand color</div>
      </Card>
      <Card>
        {[
          { label: "School Name", value: "Kogbodi Intl. School" },
          { label: "School Code", value: "KIS001" },
          { label: "Active Term", value: "2nd Term · 2024/25" },
          { label: "Subscription", value: "Active · Pay per publish" },
        ].map((row, i, arr) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none" }}>
            <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{row.label}</span>
            <span style={{ fontSize: 13, fontWeight: 500 }}>{row.value}</span>
          </div>
        ))}
      </Card>
    </div>
  );
}

export default function AdminPortal() {
  const { activeTab, setActiveTab } = useApp();
  const tabs = {
    home: <AdminHome setTab={setActiveTab} />,
    students: <AdminStudents />,
    results: <AdminResults />,
    magazine: <AdminMagazine />,
    settings: <AdminSettings />,
  };
  return tabs[activeTab] || <AdminHome setTab={setActiveTab} />;
}
