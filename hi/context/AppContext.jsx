import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const roles = {
  student: {
    label: "Student",
    color: "#1a6bff",
    nav: [
      { id: "home", label: "Home", icon: "🏠" },
      { id: "results", label: "Results", icon: "📊" },
      { id: "magazine", label: "Magazine", icon: "📰" },
      { id: "chat", label: "Chat", icon: "💬" },
      { id: "profile", label: "Profile", icon: "👤" },
    ]
  },
  teacher: {
    label: "Teacher",
    color: "#1a6bff",
    nav: [
      { id: "home", label: "Home", icon: "🏠" },
      { id: "scores", label: "Scores", icon: "📝" },
      { id: "attendance", label: "Attend.", icon: "📅" },
      { id: "chat", label: "Chat", icon: "💬" },
      { id: "profile", label: "Profile", icon: "👤" },
    ]
  },
  parent: {
    label: "Parent",
    color: "#1a6bff",
    nav: [
      { id: "home", label: "Home", icon: "🏠" },
      { id: "results", label: "Results", icon: "📊" },
      { id: "fees", label: "Fees", icon: "💰" },
      { id: "chat", label: "Chat", icon: "💬" },
      { id: "profile", label: "Profile", icon: "👤" },
    ]
  },
  admin: {
    label: "Admin",
    color: "#1a6bff",
    nav: [
      { id: "home", label: "Home", icon: "🏠" },
      { id: "students", label: "Students", icon: "👨‍🎓" },
      { id: "results", label: "Results", icon: "📊" },
      { id: "magazine", label: "Magazine", icon: "📰" },
      { id: "settings", label: "Settings", icon: "⚙️" },
    ]
  },
  alumni: {
    label: "Alumni",
    color: "#1a6bff",
    nav: [
      { id: "home", label: "Home", icon: "🏠" },
      { id: "magazine", label: "Magazine", icon: "📰" },
      { id: "chat", label: "Chat", icon: "💬" },
      { id: "donate", label: "Donate", icon: "❤️" },
      { id: "profile", label: "Profile", icon: "👤" },
    ]
  }
};

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [school, setSchool] = useState(null);
  const [activeTab, setActiveTab] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const login = (role, schoolData) => {
    setUser({ role, name: "Demo User", initials: "DU" });
    setSchool(schoolData || { name: "Kogbodi Intl. School", code: "KIS001" });
    setActiveTab("home");
  };

  const logout = () => {
    setUser(null);
    setSchool(null);
    setActiveTab("home");
  };

  return (
    <AppContext.Provider value={{
      user, school, activeTab, setActiveTab,
      sidebarOpen, setSidebarOpen, login, logout,
      nav: user ? roles[user.role]?.nav || [] : []
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
