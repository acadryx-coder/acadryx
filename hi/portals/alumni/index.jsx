import { useApp } from "../../context/AppContext";
import { Card, StatCard, SectionHeader, Badge, Btn, ListItem, Avatar } from "../../components/ui";

function AlumniHome({ setTab }) {
  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Welcome back,</div>
        <div style={{ fontWeight: 700, fontSize: 22 }}>Taiwo Kalu 🎓</div>
        <div style={{ fontSize: 13, color: "var(--brand)" }}>Class of 2020 · Kogbodi Intl. School</div>
        <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>312 alumni connected</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
        <Card onClick={() => setTab("magazine")} style={{ cursor: "pointer" }}>
          <div style={{ fontSize: 24, marginBottom: 8 }}>📰</div>
          <div style={{ fontWeight: 600, fontSize: 14 }}>Magazine</div>
          <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>Latest: Vol XIV</div>
        </Card>
        <Card onClick={() => setTab("chat")} style={{ cursor: "pointer" }}>
          <div style={{ fontSize: 24, marginBottom: 8 }}>💬</div>
          <div style={{ fontWeight: 600, fontSize: 14 }}>Alumni Chat</div>
          <Badge style={{ marginTop: 4 }}>5 new</Badge>
        </Card>
      </div>

      <SectionHeader title="Live School Feed" />
      <Card style={{ padding: "8px 16px", marginBottom: 16 }}>
        {[
          { icon: "🏆", title: "Science Olympiad Win — 2025", sub: "Your alma mater just won national.", time: "2h" },
          { icon: "📰", title: "New magazine: Kogbodi Times Vol XIV", sub: "Published Jan 2025 · Read now", time: "3d" },
          { icon: "⚽", title: "Inter-house Sports: Feb 14th", sub: "Alumni invited. Come back home.", time: "5d" },
        ].map((f, i, arr) => (
          <ListItem key={i}
            left={<div style={{ width: 40, height: 40, background: "var(--brand-light)", borderRadius: "var(--radius-sm)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{f.icon}</div>}
            title={f.title} sub={f.sub}
            right={<span style={{ fontSize: 12, color: "var(--text-muted)" }}>{f.time}</span>}
            onClick={() => {}} divider={i < arr.length - 1}
          />
        ))}
      </Card>

      {/* Donate */}
      <Card style={{ background: "var(--brand)" }}>
        <div style={{ color: "#fff", marginBottom: 12 }}>
          <div style={{ fontWeight: 700, fontSize: 16 }}>Support Your School ❤️</div>
          <div style={{ fontSize: 13, opacity: 0.85, marginTop: 4 }}>Donate to the Alumni Fund. Scholarships, infrastructure, legacy.</div>
        </div>
        <Btn style={{ background: "#fff", color: "var(--brand)", border: "none", fontWeight: 700, width: "100%" }} onClick={() => {}}>
          Donate via Flutterwave →
        </Btn>
      </Card>
    </div>
  );
}

function AlumniMagazine() {
  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontWeight: 700, fontSize: 20 }}>The Kogbodi Times</div>
        <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Volume XIV · Issue 2 · 2024/25</div>
      </div>
      <Card style={{ padding: "8px 16px" }}>
        {[
          { cat: "Achievement", title: "We Won the National Science Olympiad", icon: "🏆" },
          { cat: "Sports", title: "Football Season Recap: A Historic Year", icon: "⚽" },
          { cat: "Science", title: "A Tour of Our New Chemistry Lab", icon: "🔬" },
        ].map((a, i, arr) => (
          <ListItem key={i}
            left={<div style={{ fontSize: 24, width: 36, textAlign: "center" }}>{a.icon}</div>}
            title={a.title} sub={a.cat}
            right={<span style={{ fontSize: 18, color: "var(--text-muted)" }}>›</span>}
            divider={i < arr.length - 1}
          />
        ))}
      </Card>
    </div>
  );
}

function AlumniChat() {
  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <SectionHeader title="Alumni Chats" />
      <Card style={{ padding: "8px 16px" }}>
        {[
          { name: "Class of 2020 Chat", last: "Emeka: Reunion this December?", time: "1h", unread: 5, initials: "20" },
          { name: "Global Alumni — Kogbodi", last: "312 members · Active now", time: "4h", initials: "GA" },
        ].map((c, i, arr) => (
          <ListItem key={i}
            left={<Avatar initials={c.initials} size={40} />}
            title={c.name} sub={c.last}
            right={<div style={{ textAlign: "right" }}><div style={{ fontSize: 11, color: "var(--text-muted)" }}>{c.time}</div>{c.unread && <Badge style={{ marginTop: 4 }}>{c.unread}</Badge>}</div>}
            onClick={() => {}} divider={i < arr.length - 1}
          />
        ))}
      </Card>
    </div>
  );
}

function AlumniProfile() {
  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <Card style={{ textAlign: "center", padding: "28px 20px", marginBottom: 16 }}>
        <Avatar initials="TK" size={72} />
        <div style={{ fontWeight: 700, fontSize: 18, marginTop: 12 }}>Taiwo Kalu</div>
        <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Class of 2020 · Kogbodi Intl. School</div>
        <Badge style={{ marginTop: 10 }}>Alumni</Badge>
      </Card>
      <Card>
        {[
          { label: "Graduation Year", value: "2020" },
          { label: "Final Class", value: "SSS 3A" },
          { label: "Alumni Network", value: "312 connected" },
        ].map((row, i, arr) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none" }}>
            <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{row.label}</span>
            <span style={{ fontSize: 13, fontWeight: 500 }}>{row.value}</span>
          </div>
        ))}
      </Card>
      <Card style={{ marginTop: 16, background: "var(--brand-light)", border: "1px solid var(--brand-mid)" }}>
        <div style={{ fontSize: 13, color: "var(--brand)", textAlign: "center" }}>
          🔒 Verified Academic Record · Permanently stored by Acadryx
        </div>
      </Card>
    </div>
  );
}

function AlumniDonate() {
  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <SectionHeader title="Alumni Fund" />
      <Card style={{ marginBottom: 16, textAlign: "center", padding: "28px 20px" }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>❤️</div>
        <div style={{ fontWeight: 700, fontSize: 18 }}>Give Back to Kogbodi</div>
        <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 8, lineHeight: 1.6 }}>Your donation funds scholarships, infrastructure, and builds a lasting legacy for the next generation.</div>
      </Card>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
        {["₦5,000", "₦10,000", "₦25,000", "Custom"].map(a => (
          <Btn key={a} variant="secondary" style={{ width: "100%" }}>{a}</Btn>
        ))}
      </div>
      <Btn style={{ width: "100%" }} size="lg">Donate via Flutterwave →</Btn>
    </div>
  );
}

export default function AlumniPortal() {
  const { activeTab, setActiveTab } = useApp();
  const tabs = {
    home: <AlumniHome setTab={setActiveTab} />,
    magazine: <AlumniMagazine />,
    chat: <AlumniChat />,
    donate: <AlumniDonate />,
    profile: <AlumniProfile />,
  };
  return tabs[activeTab] || <AlumniHome setTab={setActiveTab} />;
}
