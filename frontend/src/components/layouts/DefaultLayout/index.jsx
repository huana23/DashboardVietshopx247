import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen bg-surface text-on-surface">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex flex-col flex-1 min-w-0 h-screen">
        <Header onMenuClick={toggleSidebar} />
        <div className="flex-1 overflow-y-auto overflow-x-hidden">{children}</div>
        <Footer />
      </main>
    </div>
  );
}

export default DefaultLayout;
