import { useState } from "react";
import { useApp } from "../../context/AppContext";
import { Card, FeatureCard, StatCard, SectionHeader, Badge, Avatar, Btn, ListItem, EmptyState } from "../../components/ui";

// TEACHER HOME
function TeacherHome({ setTab }) {
  const classes = [
    { subject: "Mathematics", class: "SSS 2A", students: 42, assessment: "CA2", status: "open" },
    { subject: "Mathematics", class: "SSS 2B", students: 38, assessment: "CA2", status: "open" },
    { subject: "Mathematics", class: "SSS 1A", students: 40, assessment: "CA1", status: "submitted" },
    { subject: "Basic Science", class: "JSS 3A", students: 47, assessment: "Exam", status: "open" },
  ];

  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Good morning,</div>
        <div style={{ fontWeight: 700, fontSize: 22 }}>Mr. Adewale 📋</div>
        <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Mathematics · Tuesday, 3rd March</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
        <StatCard label="Total Students" value="167" sub="Across all classes" icon="👥" />
        <StatCard label="Open Entries" value="4" sub="Awaiting scores" icon="📝" />
      </div>

      {/* Enter scores CTA */}
      <Card style={{ background: "var(--brand)", marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#fff" }}>📝 Enter Scores</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", marginTop: 2 }}>CA2 open for 3 classes</div>
          </div>
          <Btn onClick={() => setTab("scores")} style={{ background: "#fff", color: "var(--brand)", fontWeight: 700, border: "none", padding: "8px 16px", borderRadius: "var(--radius-sm)", cursor: "pointer", fontSize: 13 }}>Open →</Btn>
        </div>
      </Card>

      <SectionHeader title="My Subject Classes" action="View all" />
      <Card style={{ padding: "8px 16px" }}>
        {classes.map((c, i) => (
          <div key={i} style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "12px 0", borderBottom: i < classes.length - 1 ? "1px solid var(--border)" : "none"
          }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{c.subject} — {c.class}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{c.students} students · {c.assessment}</div>
            </div>
            <Badge color={c.status === "open" ? "var(--brand)" : "#16a34a"} bg={c.status === "open" ? "var(--brand-light)" : "rgba(22,163,74,0.1)"}>
              {c.status === "open" ? "Open" : "Done ✓"}
            </Badge>
          </div>
        ))}
      </Card>
    </div>
  );
}

// SCORE ENTRY
function ScoreEntry() {
  const [selectedClass, setSelectedClass] = useState(null);
  const [scores, setScores] = useState({});

  const classes = [
    { id: 1, subject: "Mathematics", class: "SSS 2A", assessment: "CA2", maxScore: 20, students: 42 },
    { id: 2, subject: "Mathematics", class: "SSS 2B", assessment: "CA2", maxScore: 20, students: 38 },
    { id: 3, subject: "Basic Science", class: "JSS 3A", assessment: "Exam", maxScore: 100, students: 47 },
  ];

  const students = [
    "Adeyemi, Blessing", "Chukwuemeka, Obi", "Dankwa, Emeka",
    "Fagbemi, Ife", "Garba, Aminu", "Hassan, Fatima",
    "Ibrahim, Yusuf", "Johnson, Kemi", "Kalu, Taiwo", "Lawal, Sola"
  ];

  if (selectedClass) {
    return (
      <div style={{ padding: "16px" }} className="fade-up">
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <Btn variant="ghost" size="sm" onClick={() => setSelectedClass(null)}>← Back</Btn>
          <div>
            <div style={{ fontWeight: 700, fontSize: 16 }}>{selectedClass.subject} — {selectedClass.class}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{selectedClass.assessment} · Max: {selectedClass.maxScore}pts · Auto-saves</div>
          </div>
        </div>

        <Card style={{ padding: "8px 16px", marginBottom: 16 }}>
          {students.map((s, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 14, padding: "10px 0",
              borderBottom: i < students.length - 1 ? "1px solid var(--border)" : "none"
            }}>
              <Avatar initials={s.split(",")[0].substring(0, 2).toUpperCase()} size={34} />
              <div style={{ flex: 1, fontWeight: 500, fontSize: 14 }}>{s}</div>
              <input
                type="number"
                min={0}
                max={selectedClass.maxScore}
                placeholder="—"
                value={scores[`${selectedClass.id}-${i}`] || ""}
                onChange={e => setScores(prev => ({ ...prev, [`${selectedClass.id}-${i}`]: e.target.value }))}
                style={{
                  width: 56, padding: "6px 8px", textAlign: "center",
                  border: "1.5px solid var(--border)", borderRadius: "var(--radius-sm)",
                  fontSize: 15, fontWeight: 600, color: "var(--text-primary)",
                  outline: "none", fontFamily: "inherit"
                }}
                onFocus={e => e.target.style.borderColor = "var(--brand)"}
                onBlur={e => e.target.style.borderColor = "var(--border)"}
              />
            </div>
          ))}
        </Card>

        <div style={{ display: "flex", gap: 10 }}>
          <Btn variant="ghost" style={{ flex: 1 }}>Save Draft</Btn>
          <Btn style={{ flex: 2 }}>Submit for Approval</Btn>
        </div>
        <div style={{ textAlign: "center", fontSize: 12, color: "var(--text-muted)", marginTop: 10 }}>✓ Auto-saved 2 minutes ago</div>
      </div>
    );
  }

  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <SectionHeader title="Score Entry" sub="Select a class to enter scores" />
      {classes.map(c => (
        <Card key={c.id} onClick={() => setSelectedClass(c)} style={{ marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: 15 }}>{c.subject} — {c.class}</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 2 }}>{c.students} students · {c.assessment} · {c.maxScore}pts max</div>
            </div>
            <span style={{ fontSize: 20, color: "var(--text-muted)" }}>›</span>
          </div>
        </Card>
      ))}
    </div>
  );
}

// ATTENDANCE
function Attendance() {
  const students = [
    { name: "Adeyemi, Blessing", initials: "AB" },
    { name: "Chukwuemeka, Obi", initials: "CO" },
    { name: "Dankwa, Emeka", initials: "DE" },
    { name: "Fagbemi, Ife", initials: "FI" },
    { name: "Garba, Aminu", initials: "GA" },
    { name: "Hassan, Fatima", initials: "HF" },
  ];
  const [attendance, setAttendance] = useState({});
  const toggle = (name, val) => setAttendance(prev => ({ ...prev, [name]: val }));

  const present = Object.values(attendance).filter(v => v === "P").length;
  const absent = Object.values(attendance).filter(v => v === "A").length;

  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontWeight: 700, fontSize: 18 }}>Attendance</div>
        <div style={{ fontSize: 13, color: "var(--text-muted)" }}>SSS 2A — Tuesday, 3 March 2026</div>
      </div>

      <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
        <Card style={{ flex: 1, textAlign: "center", padding: "10px" }}>
          <div style={{ fontWeight: 700, fontSize: 20, color: "#16a34a" }}>{present}</div>
          <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Present</div>
        </Card>
        <Card style={{ flex: 1, textAlign: "center", padding: "10px" }}>
          <div style={{ fontWeight: 700, fontSize: 20, color: "#dc2626" }}>{absent}</div>
          <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Absent</div>
        </Card>
        <Card style={{ flex: 1, textAlign: "center", padding: "10px" }}>
          <div style={{ fontWeight: 700, fontSize: 20, color: "var(--text-muted)" }}>{students.length - present - absent}</div>
          <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Unmarked</div>
        </Card>
      </div>

      <div style={{ fontSize: 12, color: "#f59e0b", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}>
        📶 Offline mode — will sync when connected
      </div>

      <Card style={{ padding: "8px 16px", marginBottom: 16 }}>
        {students.map((s, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 12, padding: "10px 0",
            borderBottom: i < students.length - 1 ? "1px solid var(--border)" : "none"
          }}>
            <Avatar initials={s.initials} size={38} />
            <div style={{ flex: 1, fontWeight: 500, fontSize: 14 }}>{s.name}</div>
            <div style={{ display: "flex", gap: 6 }}>
              {["P", "A"].map(v => (
                <button key={v} onClick={() => toggle(s.name, v)} style={{
                  width: 32, height: 32, borderRadius: "50%", border: "2px solid",
                  borderColor: attendance[s.name] === v ? (v === "P" ? "#16a34a" : "#dc2626") : "var(--border)",
                  background: attendance[s.name] === v ? (v === "P" ? "rgba(22,163,74,0.1)" : "rgba(220,38,38,0.1)") : "transparent",
                  color: attendance[s.name] === v ? (v === "P" ? "#16a34a" : "#dc2626") : "var(--text-muted)",
                  fontWeight: 700, fontSize: 12, cursor: "pointer", transition: "all 0.15s"
                }}>{v}</button>
              ))}
            </div>
          </div>
        ))}
      </Card>
      <Btn style={{ width: "100%" }}>Submit Attendance</Btn>
    </div>
  );
}

// TEACHER CHAT - reuse same pattern
function TeacherChat() {
  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <SectionHeader title="Messages" />
      <Card style={{ padding: "8px 16px" }}>
        {[
          { name: "SSS 2A Class", last: "Emeka: Who has chemistry notes?", time: "30m", initials: "2A", unread: 5 },
          { name: "Staff Room", last: "Principal: Meeting at 3PM", time: "1h", initials: "SR" },
          { name: "PTA Chat", last: "Parent: Query about fees", time: "2h", initials: "PT" },
        ].map((c, i, arr) => (
          <ListItem key={i} left={<Avatar initials={c.initials} size={40} />}
            title={c.name} sub={c.last}
            right={<div style={{ textAlign: "right" }}><div style={{ fontSize: 11, color: "var(--text-muted)" }}>{c.time}</div>{c.unread && <Badge style={{ marginTop: 4 }}>{c.unread}</Badge>}</div>}
            onClick={() => {}} divider={i < arr.length - 1}
          />
        ))}
      </Card>
    </div>
  );
}

function TeacherProfile() {
  return (
    <div style={{ padding: "16px" }} className="fade-up">
      <Card style={{ textAlign: "center", padding: "28px 20px", marginBottom: 16 }}>
        <Avatar initials="AO" size={72} />
        <div style={{ fontWeight: 700, fontSize: 18, marginTop: 12 }}>Mr. Adewale O.</div>
        <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Mathematics · Kogbodi Intl. School</div>
        <Badge style={{ marginTop: 10 }}>Teacher</Badge>
      </Card>
      <Card>
        {[
          { label: "Staff ID", value: "TCH-0045" },
          { label: "Department", value: "Sciences" },
          { label: "Classes", value: "4 assigned" },
          { label: "Total Students", value: "167" },
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

export default function TeacherPortal() {
  const { activeTab, setActiveTab } = useApp();
  const tabs = {
    home: <TeacherHome setTab={setActiveTab} />,
    scores: <ScoreEntry />,
    attendance: <Attendance />,
    chat: <TeacherChat />,
    profile: <TeacherProfile />,
  };
  return tabs[activeTab] || <TeacherHome setTab={setActiveTab} />;
}
