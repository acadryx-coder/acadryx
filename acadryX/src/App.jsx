// App.jsx — Detects school from URL on mount, then handles login/logout.
// State: school (from URL), user (from access code).

import { useState, useEffect } from "react";
import { detectSlug, getSchoolBySlug } from "./data/school.js";
import Login from "./ui/Login.jsx";
import StudentPortal from "./portals/StudentPortal.jsx";
import AdminPortal from "./portals/AdminPortal.jsx";
import { TeacherPortal, ParentPortal, AlumniPortal } from "./portals/OtherPortals.jsx";
import "./ui/styles/globals.css";

// NOT FOUND — shown when URL slug doesn't match any school
function SchoolNotFound({ slug }) {
  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", background: "var(--bg)", padding: 24,
    }}>
      <div style={{ textAlign: "center", maxWidth: 360 }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🏫</div>
        <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>School not found</div>
        <div style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
          {slug
            ? <>We couldn't find a school at <strong>{slug}.acadryx.com</strong>. Check the URL or contact your administrator.</>
            : <>No school was specified in the URL. Access your school's portal via the link your administrator provided.</>
          }
        </div>
        <div style={{ marginTop: 24, fontSize: 12, color: "var(--text-muted)" }}>
          Powered by <span style={{ color: "var(--brand)", fontWeight: 600 }}>Acadryx</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [school, setSchool] = useState(null);
  const [schoolError, setSchoolError] = useState(false);
  const [slug, setSlug] = useState("");
  const [user, setUser] = useState(null);

  // On mount: read URL, resolve school, apply brand
  useEffect(() => {
    const detectedSlug = detectSlug();
    setSlug(detectedSlug || "");

    const found = getSchoolBySlug(detectedSlug);
    if (!found) { setSchoolError(true); return; }

    setSchool(found);

    // Apply this school's brand color globally
    document.documentElement.style.setProperty("--brand", found.brandColor);
    document.documentElement.style.setProperty("--brand-light", found.brandColor + "14");
    document.documentElement.style.setProperty("--brand-mid", found.brandColor + "33");

    // Page title = school name
    document.title = found.name;
  }, []);

  function handleLogin(resolvedUser) {
    setUser(resolvedUser);
  }

  function handleLogout() {
    setUser(null);
  }

  if (schoolError) return <SchoolNotFound slug={slug} />;
  if (!school)     return null; // still loading

  if (!user) return <Login school={school} onLogin={handleLogin} />;

  const portals = {
    student: <StudentPortal user={user} school={school} onLogout={handleLogout} />,
    admin:   <AdminPortal   user={user} school={school} onLogout={handleLogout} />,
    teacher: <TeacherPortal user={user} school={school} onLogout={handleLogout} />,
    parent:  <ParentPortal  user={user} school={school} onLogout={handleLogout} />,
    alumni:  <AlumniPortal  user={user} school={school} onLogout={handleLogout} />,
  };

  return portals[user.role] || <Login school={school} onLogin={handleLogin} />;
}
