function AlertsPanel({ alerts }) {
  const safeAlerts = Array.isArray(alerts) ? alerts : [];
  const toneClasses = {
    error: "text-error border-error",
    tertiary: "text-tertiary border-tertiary",
    primary: "text-primary border-primary",
  };

  return (
    <section className="w-full h-full flex flex-col rounded-xl bg-surface-container-low p-4 lg:p-6 lg:col-span-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="font-headline text-base lg:text-lg font-bold text-on-surface">
          Cảnh báo hoạt động
        </h2>
        <span className="rounded bg-error/10 px-2 py-1 text-xs font-bold uppercase text-error whitespace-nowrap">
          {safeAlerts.length} Cảnh báo
        </span>
      </div>

      <div className="thin-scrollbar flex-1 flex flex-col gap-3 overflow-y-auto">
        {safeAlerts.length ? (
          safeAlerts.map((alert) => (
            <article
              key={alert.title}
              className={`cursor-pointer rounded-lg border-l-4 bg-surface-container p-3 lg:p-4 transition-all hover:bg-surface-container-high ${toneClasses[alert.tone]}`}
            >
              <div className="mb-1.5 flex items-center gap-2">
                <span
                  className={`material-symbols-outlined text-base lg:text-lg ${toneClasses[alert.tone].split(" ")[0]}`}
                >
                  {alert.icon}
                </span>
                <span
                  className={`text-xs font-black uppercase ${toneClasses[alert.tone].split(" ")[0]}`}
                >
                  {alert.label}
                </span>
              </div>
              <p className="text-xs lg:text-sm font-medium text-on-surface line-clamp-2">
                {alert.title}
              </p>
              <span className="mt-1.5 block text-xs text-on-surface-variant">{alert.meta}</span>
            </article>
          ))
        ) : (
          <div className="rounded-lg bg-surface-container p-3 text-xs lg:text-sm text-on-surface-variant">
            No active alerts. System is currently stable.
          </div>
        )}
      </div>

      <button className="mt-3 w-full py-2 lg:py-2.5 text-xs font-bold text-on-surface-variant transition-colors hover:text-on-surface">
        Xem tất cả cảnh báo
      </button>
    </section>
  );
}

export default AlertsPanel;
