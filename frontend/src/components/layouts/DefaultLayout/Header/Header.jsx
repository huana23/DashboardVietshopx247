function Header({ userName = "Admin", userRole = "System Admin", avatarUrl }) {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between bg-surface px-6 py-3">
      <div className="flex items-center gap-4">
        <button className="md:hidden">
          <span className="material-symbols-outlined text-primary">menu</span>
        </button>
        <div className="ml-4 hidden items-center rounded-full bg-surface-container-low px-4 py-1.5 md:flex">
          <span className="material-symbols-outlined mr-2 text-sm text-on-surface-variant">
            search
          </span>
          <input
            type="text"
            placeholder="Tìm kiếm..."
            aria-label="Search systems"
            className="w-64 border-none bg-transparent text-sm text-on-surface-variant placeholder:text-outline-variant focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative cursor-pointer transition-transform hover:scale-105">
          <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full border-2 border-surface bg-error"></span>
        </button>
        <button className="cursor-pointer transition-transform duration-500 hover:rotate-90">
          <span className="material-symbols-outlined text-on-surface-variant">settings</span>
        </button>
        <div className="flex items-center gap-3 border-l border-outline-variant/20 pl-4">
          <img
            loading="lazy"
            className="h-8 w-8 rounded-full object-cover"
            alt={`${userName} avatar`}
            src={
              avatarUrl ||
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAh-AcyPgoUmx95gcXPeCRy2pfM1IIy4WpU0F-KkGA3sVOZumD3UbXGJjNTEMhc6nK6aN-Nph2G1fxTpiCgbsNe9akoqqb9wVbHV-X4-3k158la6YofgL7TPuGbJQIPXa4-piA4t2Na4hW_JxJ6MLGYJ8N2xnAFwRFRBQJL8Oh1KwxzBJzXq44Y0U0OU3Jl0jAfgjq9b6PfcXmTsyYZyWv3YsGTnUrvLq-rcUtdL2blZ6q1xDUUbRp8mGcBIwDu7CXldZXdeiZ0Jh76"
            }
          />
          <div className="hidden lg:block">
            <p className="text-xs font-bold text-on-surface">{userName}</p>
            <p className="text-[10px] uppercase tracking-tighter text-on-surface-variant">
              {userRole}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
