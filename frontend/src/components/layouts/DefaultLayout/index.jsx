import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-surface text-on-surface">
      <Sidebar />
      <main className="ml-0 flex min-w-0 flex-1 flex-col md:ml-64">
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
}

export default DefaultLayout;
