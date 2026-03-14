import { useState } from "react";
import { useApp } from "../../context/AppContext";
import {
  Card, FeatureCard, StatCard, SectionHeader,
  Badge, Avatar, Btn, ListItem, EmptyState, Divider
} from "../../components/ui";

// STUDENT HOME
function StudentHome({ setTab }) {
  return (
    <div style={{ padding: "16px" }} className="fade-up">
      {/* Greeting */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Good morning,</div>
        <div style={{ fontWeight: 700, fontSize: 22, color: "var(--text-primary)" }}>Chukwuemeka 👋</div>
        <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 2 }}>SSS 2A · Tuesday, 3rd March</div>
      </div>

      {/* Quick stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
        <StatCard label="Term Average" value="78.4%" sub="Position: 3rd of 42" trend="+4.2 pts" />
        <StatCard label="Attendance" value="94%" sub="This term" icon="📅" />
      </div>

      {/* Feature cards */}
      <SectionHeader title="Quick Access" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
        <FeatureCard icon="📊" label="My Results" sub="2nd Term" onClick={() => setTab("results")} />
        <FeatureCard icon="📅" label="Timetable" sub="Today's classes" />
        <FeatureCard icon="📰" label="Magazine" sub="Vol XIV · Issue 2" onClick={() => setTab("magazine")} badge="New" />
        <FeatureCard icon="📢" label="Announcements" sub="3 new" badge={3} />
        <FeatureCard icon="💬" label="Class Chat" sub="SSS 2A" onClick={() => setTab("chat")} />
        <FeatureCard icon="📚" label="Resources" sub="Study materials" />
      </div>

      {/* Today's schedule */}
      <SectionHeader title="Today's Classes" />
      <Card>
        {[
          { time: "7:30 – 8:20", subject: "Mathematics", room: "Room 12", status: "done" },
          { time: "8:20 – 9:10", subject: "English", room: "Room 14", status: "done" },
          { time: "9:10 – 10:00", subject: "Chemistry", room: "Lab A", status: "now" },
          { time: "10:20 – 11:10", subject: "Physics", room: "Lab B", status: "next" },
          { time: "11:10 – 12:00", subject: "Economics", room: "Room 7", status: "" },
        ].map((cls, i, arr) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 12, padding: "10px 0",
            borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none"
          }}>
            <div style={{ width: 4, height: 36, borderRadius: 2, background: cls.status === "now" ? "var(--brand)" : cls.status === "done" ? "var(--border)" : "var(--surface-2)", flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14, color: cls.status === "done" ? "var(--text-muted)" : "var(--text-primary)" }}>{cls.subject}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{cls.time} · {cls.room}</div>
            </div>
            {cls.status === "now" && <Badge>● Now</Badge>}
          </div>
        ))}
      </Card>
    </div>
  );
}

// STUDENT RESULTS
function StudentResults() {
  const subjects = [
    { name: "Mathematics", icon: "➕", score: 88, grade: "A" },
    { name: "English Language", icon: "📖", score: 84, grade: "A" },
    { name: "Chemistry", icon: "⚗️", score: 79, grade: "B" },
    { name: "Physics", icon: "🔭", score: 76, grade: "B" },
    { name: "Economics", icon: "📊", score: 72, grade: "C" },
    { name: "Data Processing", icon: "💻", score: 82, grade: "A" },
  ];

  return (
    <div style={{ padding: "16px" }} className="fade-up">
      {/* Summary */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 20 }}>
        {[
          { label: "Position", value: "3rd" },
          { label: "Average", value: "78.4%" },
          { label: "Best", value: "A" },
          { label: "Subjects", value: "9" },
        ].map(s => (
          <Card key={s.label} style={{ textAlign: "center", padding: "12px 8px" }}>
            <div style={{ fontWeight: 700, fontSize: 18, color: "var(--brand)" }}>{s.value}</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{s.label}</div>
          </Card>
        ))}
      </div>

      <SectionHeader title="Subject Scores" />
      <Card style={{ padding: "8px 16px" }}>
        {subjects.map((s, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 12, padding: "12px 0",
            borderBottom: i < subjects.length - 1 ? "1px solid var(--border)" : "none"
          }}>
            <div style={{ fontSize: 20, width: 32, textAlign: "center" }}>{s.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 500, fontSize: 14 }}>{s.name}</div>
              <div style={{ marginTop: 6, height: 4, background: "var(--surface-2)", borderRadius: 2 }}>
                <div style={{ height: "100%", width: `${s.score}%`, background: "var(--brand)", borderRadius: 2, transition: "width 0.8s ease" }} />
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontWeight: 700, fontSize: 16 }}>{s.score}</div>
              <Badge>{s.grade}</Badge>
            </div>
          </div>
        ))}
      </Card>

      {/* Teacher comment */}
      <Card style={{ marginTop: 16, background: "var(--brand-light)", border: "1px solid var(--brand-mid)" }}>
        <div style={{ fontSize: 12, color: "var(--brand)", fontWeight: 600, marginBottom: 8 }}>{"Form Teacher's Comment"}</div>
        <div style={{ fontSize: 14, color: "var(--text-secondary)", fontStyle: "italic", lineHeight: 1.6 }}>
          "Chukwuemeka has demonstrated consistent effort throughout the term. His performance in Mathematics is commendable."
        </div>
        <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 8 }}>— Mrs. Adeyemi J., Form Teacher</div>
      </Card>

      {/* Verified badge */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "14px 0", justifyContent: "center" }}>
        <span style={{ fontSize: 16 }}>🔒</span>
        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Verified Academic Record · Permanently stored</span>
      </div>
    </div>
  );
}

// STUDENT MAGAZINE
function StudentMagazine() {
  const articles = [
    { cat: "Achievement", title: "We Won the National Science Olympiad", author: "Chidi Eze", date: "Jan 14", icon: "🏆" },
    { cat: "Culture", title: "Art Exhibition 2025: Colours of Tomorrow", author: "Amaka Obi", date: "Jan 10", icon: "🎨" },
    { cat: "Science", title: "A Tour of Our New Chemistry Lab", author: "Staff", date: "Jan 8", icon: "🔬" },
    { cat: "Poem", title: "The River Knows My Name", author: "Fatima Musa", date: "Jan 6", icon: "✏️" },
    { cat: "Sports", title: "Football Season Recap: A Historic Year", author: "Taiwo Adamu", date: "Jan 5", icon: "⚽" },
  ];
  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 20 }}>The Kogbodi Times</div>
          <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Volume XIV · Issue 2 · 2024/25</div>
          <div style={{ fontSize: 12, color: "#16a34a", marginTop: 4 }}>💰 Saved ₦490,000 vs print this year</div>
        </div>
        <Badge>1,247 readers</Badge>
      </div>
      <Btn variant="secondary" size="sm" style={{ width: "100%", marginBottom: 20 }}>✍️ Submit Your Article</Btn>
      <SectionHeader title="Latest Articles" />
      <Card style={{ padding: "8px 16px" }}>
        {articles.map((a, i) => (
          <ListItem
            key={i}
            left={<div style={{ fontSize: 24, width: 36, textAlign: "center" }}>{a.icon}</div>}
            title={a.title}
            sub={`${a.cat} · By ${a.author} · ${a.date}`}
            right={<span style={{ fontSize: 18, color: "var(--text-muted)" }}>›</span>}
            onClick={() => {}}
            divider={i < articles.length - 1}
          />
        ))}
      </Card>
    </div>
  );
}

// STUDENT CHAT
function StudentChat() {
  const channels = [
    { name: "School Announcements", last: "Exams start Monday. Be prepared.", time: "2h", unread: 3, icon: "📢" },
    { name: "SSS 2A Class Chat", last: "Emeka: Who has the chemistry notes?", time: "30m", unread: 12, icon: "🏫" },
    { name: "Events Feed", last: "New event: Inter-house Sports — Feb 14", time: "3d", unread: 0, icon: "📅" },
  ];
  const dms = [
    { name: "Mr. Adewale (Maths)", last: "Good work on your CA score!", time: "1d", initials: "AO" },
    { name: "Fatima Kalu (SSS2A)", last: "Are you coming to the library?", time: "2d", initials: "FK" },
  ];
  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <SectionHeader title="School Channels" />
      <Card style={{ padding: "8px 16px", marginBottom: 16 }}>
        {channels.map((c, i) => (
          <ListItem key={i} left={<div style={{ width: 40, height: 40, background: "var(--brand-light)", borderRadius: "var(--radius-sm)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{c.icon}</div>}
            title={c.name} sub={c.last}
            right={<div style={{ textAlign: "right" }}><div style={{ fontSize: 11, color: "var(--text-muted)" }}>{c.time}</div>{c.unread > 0 && <Badge style={{ marginTop: 4 }}>{c.unread}</Badge>}</div>}
            onClick={() => {}} divider={i < channels.length - 1}
          />
        ))}
      </Card>
      <SectionHeader title="Direct Messages" />
      <Card style={{ padding: "8px 16px" }}>
        {dms.map((d, i) => (
          <ListItem key={i} left={<Avatar initials={d.initials} size={40} />}
            title={d.name} sub={d.last}
            right={<span style={{ fontSize: 12, color: "var(--text-muted)" }}>{d.time}</span>}
            onClick={() => {}} divider={i < dms.length - 1}
          />
        ))}
      </Card>
    </div>
  );
}

// STUDENT PROFILE
function StudentProfile() {
  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <Card style={{ textAlign: "center", padding: "28px 20px", marginBottom: 16 }}>
        <Avatar initials="CE" size={72} />
        <div style={{ fontWeight: 700, fontSize: 18, marginTop: 12 }}>Chukwuemeka Obi</div>
        <div style={{ fontSize: 13, color: "var(--text-muted)" }}>SSS 2A · Kogbodi Intl. School</div>
        <Badge style={{ marginTop: 10 }}>Student</Badge>
      </Card>
      <Card>
        {[
          { label: "Admission Number", value: "STU-01234" },
          { label: "Class", value: "SSS 2A" },
          { label: "Email", value: "chukwuemeka@kogbodi.edu" },
          { label: "Term", value: "2nd Term · 2024/25" },
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

// ROOT
export default function StudentPortal() {
  const { activeTab, setActiveTab } = useApp();

  const tabs = {
    home: <StudentHome setTab={setActiveTab} />,
    results: <StudentResults />,
    magazine: <StudentMagazine />,
    chat: <StudentChat />,
    profile: <StudentProfile />,
  };

  return tabs[activeTab] || <StudentHome setTab={setActiveTab} />;
}
