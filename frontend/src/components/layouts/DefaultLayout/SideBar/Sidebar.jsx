import { NavLink } from "react-router-dom";

const Sidebar = ({
  logoText = "Observatory v1.0",
  subtitle = "System Healthy",
  menuItems = [
    { name: "Overview", icon: "dashboard", href: "/dashboard" },
    { name: "Servers", icon: "dns", href: "/health" },
    { name: "Network", icon: "lan", href: "/partners" },
    { name: "Databases", icon: "database", href: "/support" },
    { name: "Logs", icon: "terminal", href: "/marketing" },
    { name: "Alerts", icon: "notification_important", href: "/access-control" },
  ],
  systemStatus = { text: "System Healthy", color: "primary" },
}) => {
  const statusColorClass =
    {
      primary: "bg-primary shadow-[0_0_8px_#00dfc1]",
      tertiary: "bg-tertiary",
      error: "bg-error",
    }[systemStatus.color] ?? "bg-primary shadow-[0_0_8px_#00dfc1]";

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col bg-surface-container-low py-6 shadow-2xl shadow-black/20 md:flex">
      {/* Header */}
      <div className="mb-8 px-6">
        <div className="font-headline mb-1 text-xl font-bold text-primary">{logoText}</div>
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${statusColorClass}`}></span>
          <span className="text-xs font-medium tracking-wide text-on-surface-variant/70">
            {subtitle}
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1" aria-label="Sidebar navigation">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            aria-label={item.name}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 text-sm font-medium tracking-wide transition-all ${
                isActive
                  ? "translate-x-1 border-r-2 border-primary bg-surface-container text-primary"
                  : "text-on-surface-variant/70 hover:bg-surface-container-high hover:text-on-surface-variant"
              }`
            }
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto px-6">
        <button className="w-full rounded-lg bg-gradient-to-br from-primary to-primary-container py-2.5 text-xs font-bold uppercase tracking-widest text-surface transition-transform active:scale-95">
          Generate Report
        </button>
        <div className="mt-6 space-y-1 border-t border-outline-variant/10 pt-6">
          <button className="flex items-center gap-3 py-2 text-sm font-medium text-on-surface-variant/70 transition-all hover:text-on-surface-variant">
            <span className="material-symbols-outlined text-sm">help</span>
            Support
          </button>
          <button className="flex items-center gap-3 py-2 text-sm font-medium text-on-surface-variant/70 transition-all hover:text-on-surface-variant">
            <span className="material-symbols-outlined text-sm">settings</span>
            Settings
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
