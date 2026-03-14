import { AppProvider, useApp } from "./context/AppContext";
import AppShell from "./components/layout/AppShell";
import Login from "./pages/Login";
import StudentPortal from "./portals/student";
import TeacherPortal from "./portals/teacher";
import ParentPortal from "./portals/parent";
import AdminPortal from "./portals/admin";
import AlumniPortal from "./portals/alumni";
import "./styles/globals.css";

// PORTAL ROUTER
function PortalRouter() {
  const { user } = useApp();
  if (!user) return <Login />;

  const portals = {
    student: <StudentPortal />,
    teacher: <TeacherPortal />,
    parent: <ParentPortal />,
    admin: <AdminPortal />,
    alumni: <AlumniPortal />,
  };

  return (
    <AppShell>
      {portals[user.role] || <Login />}
    </AppShell>
  );
}

export default function App() {
  return (
    <AppProvider>
      <PortalRouter />
    </AppProvider>
  );
}
