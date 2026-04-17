const Footer = ({ companyName = "DashboardVietshopx247", year = 2026 }) => {
  return (
    <footer
      role="contentinfo"
      className="mt-auto flex shrink-0 items-center justify-between px-6 py-4 text-xs text-on-surface-variant"
    >
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-primary"></span>
        <p className="font-medium">
          &copy; {year} {companyName} - Bảng điều khiển quan sát
        </p>
      </div>
    </footer>
  );
};

export default Footer;
