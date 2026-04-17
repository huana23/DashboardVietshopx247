import { useState } from "react";
import { NavLink } from "react-router-dom";
const Sidebar = ({
  logoText = "Hệ Thống Giám Sát",
  subtitle = "Bảng Điều Khiển Quản Trị",
  menuItems = [
    { name: "Tổng quan", icon: "dashboard", href: "/dashboard"},
    { name: "Hệ Thống", icon: "dns" ,
       children: [
        { name: "Giám sát hệ thống", href: "/health" },
        { name: "Giải cứu dữ liệu", href: "/health/data-rescue" },
        { name: "Giảm tải hệ thống", href: "/health/reduce-system-load" },
        { name: "Giảm tải người dùng", href: "/health/reduce-user-load" },

      ],
    },
    { name: "Đối tác", icon: "lan", href: "/partners" },
    { name: "Chăm sóc khách hàng", icon: "database", href: "/support" },
    { name: "Marketing", icon: "terminal", href: "/marketing" },
    { name: "Tài chính", icon: "bar_chart", 
      children: [
        { name: "Tổng quan", href: "/finance" },
        { name: "Doanh thu", href: "/finance/revenue" },
        { name: "Chi phí", href: "/finance/expenses" },
        { name: "Lợi nhuận", href: "/finance/profit" },
      ],
    },
    { name: "Kiểm soát truy cập", icon: "notification_important", href: "/access-control" },
  ],
  systemStatus = { text: "System Healthy", color: "primary" },
}) => {
  const [open, setOpen] = useState({});

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
        {menuItems.map((item) => {
          const hasChildren = Array.isArray(item.children) && item.children.length > 0;

          if (!hasChildren) {
            return (
              <NavLink
                key={item.name}
                to={item.href}
                end
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
            );
          }

          const isOpen = !!open[item.name];

          return (
            <div key={item.name} className="space-y-1">
              <button
                type="button"
                onClick={() => setOpen((p) => ({ [item.name]: !p[item.name] }))}
                aria-expanded={isOpen}
                className={`flex w-full items-center justify-between gap-3 px-6 py-3 text-sm font-medium tracking-wide transition-all text-on-surface-variant/90 hover:bg-surface-container-high ${
                  isOpen ? "bg-surface-container text-primary" : ""
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <span>{item.name}</span>
                </span>

                <span
                  className={`material-symbols-outlined transition-transform duration-150 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                  aria-hidden
                >
                  chevron_right
                </span>
              </button>

              {isOpen && (
                <div className="space-y-1">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.name}
                      to={child.href}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 pl-12 pr-6 py-2 text-sm font-medium tracking-wide transition-all ${
                          isActive
                            ? "translate-x-1 border-r-2 border-primary bg-surface-container text-primary"
                            : "text-on-surface-variant/70 hover:bg-surface-container-high hover:text-on-surface-variant"
                        }`
                      }
                    >
                      <span className="inline-block w-3" />
                      <span>{child.name}</span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
