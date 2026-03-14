import { useApp } from "../../context/AppContext";
import { Card, StatCard, SectionHeader, Badge, Btn, ListItem } from "../../components/ui";

function ParentHome({ setTab }) {
  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Good morning,</div>
        <div style={{ fontWeight: 700, fontSize: 22 }}>Mrs. Obi 👋</div>
        <div style={{ fontSize: 13, color: "var(--brand)", marginTop: 2 }}>Chukwuemeka Obi · SSS 2A</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
        <StatCard label="Term Average" value="78.4%" sub="Position: 3rd" trend="+4.2 pts" />
        <StatCard label="Attendance" value="94%" icon="📅" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
        <Card onClick={() => setTab("results")} style={{ display: "flex", flexDirection: "column", gap: 10, cursor: "pointer" }}>
          <div style={{ fontSize: 24 }}>📊</div>
          <div style={{ fontWeight: 600, fontSize: 14 }}>Results</div>
          <div style={{ fontSize: 12, color: "var(--text-muted)" }}>2nd Term scores</div>
        </Card>
        <Card onClick={() => setTab("fees")} style={{ display: "flex", flexDirection: "column", gap: 10, cursor: "pointer" }}>
          <div style={{ fontSize: 24 }}>💰</div>
          <div style={{ fontWeight: 600, fontSize: 14 }}>Fees</div>
          <Badge color="#dc2626" bg="rgba(220,38,38,0.1)">Balance: ₦25,000</Badge>
        </Card>
      </div>

      {/* Announcements */}
      <SectionHeader title="School Updates" />
      <Card style={{ padding: "8px 16px" }}>
        {[
          { text: "School closed on Friday", time: "Today · 2:30 PM", icon: "📢" },
          { text: "Parent-Teacher Meeting — Jan 28", time: "3 days ago", icon: "👥" },
          { text: "Inter-house Sports: Feb 14", time: "5 days ago", icon: "⚽" },
        ].map((a, i, arr) => (
          <ListItem key={i}
            left={<div style={{ width: 36, height: 36, background: "var(--brand-light)", borderRadius: "var(--radius-sm)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{a.icon}</div>}
            title={a.text} sub={a.time} divider={i < arr.length - 1}
          />
        ))}
      </Card>
    </div>
  );
}

function ParentResults() {
  const subjects = [
    { name: "Mathematics", score: 88, grade: "A" },
    { name: "English Language", score: 84, grade: "A" },
    { name: "Chemistry", score: 79, grade: "B" },
    { name: "Physics", score: 76, grade: "B" },
    { name: "Economics", score: 72, grade: "C" },
  ];
  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <SectionHeader title="Chukwuemeka's Results" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
        <StatCard label="Position" value="3rd" sub="of 42 students" />
        <StatCard label="Average" value="78.4%" trend="+4.2 pts" />
      </div>
      <Card style={{ padding: "8px 16px" }}>
        {subjects.map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: i < subjects.length - 1 ? "1px solid var(--border)" : "none" }}>
            <div style={{ fontWeight: 500, fontSize: 14 }}>{s.name}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ fontWeight: 700 }}>{s.score}</div>
              <Badge>{s.grade}</Badge>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}

function ParentFees() {
  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <SectionHeader title="School Fees — 2nd Term" />
      <Card style={{ marginBottom: 16 }}>
        {[
          { label: "Total Due", value: "₦85,000", highlight: false },
          { label: "Paid", value: "₦60,000", highlight: false },
          { label: "Balance", value: "₦25,000", highlight: true },
        ].map((f, i, arr) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none" }}>
            <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{f.label}</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: f.highlight ? "#dc2626" : "var(--text-primary)" }}>{f.value}</span>
          </div>
        ))}
      </Card>
      <Card style={{ background: "rgba(220,38,38,0.05)", border: "1px solid rgba(220,38,38,0.15)", marginBottom: 16 }}>
        <div style={{ fontSize: 13, color: "#dc2626" }}>⚠️ Payment deadline: January 20th</div>
      </Card>
      <Btn style={{ width: "100%" }} size="lg">Pay via Flutterwave →</Btn>
    </div>
  );
}

function ParentChat() {
  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <SectionHeader title="Messages" />
      <Card style={{ padding: "8px 16px" }}>
        {[
          { name: "School Announcements", last: "School closed on Friday", time: "2h", initials: "SA" },
          { name: "PTA Chat", last: "Meeting this Friday at 4PM", time: "1d", initials: "PT" },
        ].map((c, i, arr) => (
          <ListItem key={i}
            left={<div style={{ width: 40, height: 40, background: "var(--brand-light)", borderRadius: "var(--radius-sm)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "var(--brand)", fontSize: 13 }}>{c.initials}</div>}
            title={c.name} sub={c.last}
            right={<span style={{ fontSize: 12, color: "var(--text-muted)" }}>{c.time}</span>}
            divider={i < arr.length - 1}
          />
        ))}
      </Card>
    </div>
  );
}

function ParentProfile() {
  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <Card style={{ textAlign: "center", padding: "28px 20px", marginBottom: 16 }}>
        <div style={{ width: 72, height: 72, background: "var(--brand)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 26, margin: "0 auto" }}>MO</div>
        <div style={{ fontWeight: 700, fontSize: 18, marginTop: 12 }}>Mrs. Obi</div>
        <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Parent · Kogbodi Intl. School</div>
        <Badge style={{ marginTop: 10 }}>Parent</Badge>
      </Card>
      <Card>
        {[
          { label: "Ward", value: "Chukwuemeka Obi" },
          { label: "Class", value: "SSS 2A" },
          { label: "Phone", value: "+234 801 234 5678" },
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

export default function ParentPortal() {
  const { activeTab, setActiveTab } = useApp();
  const tabs = {
    home: <ParentHome setTab={setActiveTab} />,
    results: <ParentResults />,
    fees: <ParentFees />,
    chat: <ParentChat />,
    profile: <ParentProfile />,
  };
  return tabs[activeTab] || <ParentHome setTab={setActiveTab} />;
}
