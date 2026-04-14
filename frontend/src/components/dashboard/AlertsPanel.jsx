function AlertsPanel({ alerts }) {
  const safeAlerts = Array.isArray(alerts) ? alerts : [];
  const toneClasses = {
    error: "text-error border-error",
    tertiary: "text-tertiary border-tertiary",
    primary: "text-primary border-primary",
  };

  return (
    <section className="flex flex-col rounded-xl bg-surface-container-low p-6 lg:col-span-4">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-headline text-lg font-bold text-on-surface">Active Alerts</h2>
        <span className="rounded bg-error/10 px-2 py-0.5 text-[10px] font-bold uppercase text-error">
          {safeAlerts.length} Active
        </span>
      </div>

      <div className="thin-scrollbar space-y-4 overflow-y-auto">
        {safeAlerts.length ? (
          safeAlerts.map((alert) => (
            <article
              key={alert.title}
              className={`cursor-pointer rounded-lg border-l-4 bg-surface-container p-4 transition-all hover:bg-surface-container-high ${toneClasses[alert.tone]}`}
            >
              <div className="mb-1 flex items-center gap-3">
                <span
                  className={`material-symbols-outlined text-lg ${toneClasses[alert.tone].split(" ")[0]}`}
                >
                  {alert.icon}
                </span>
                <span
                  className={`text-xs font-black uppercase ${toneClasses[alert.tone].split(" ")[0]}`}
                >
                  {alert.label}
                </span>
              </div>
              <p className="text-sm font-medium text-on-surface">{alert.title}</p>
              <span className="mt-2 block text-[10px] text-on-surface-variant">{alert.meta}</span>
            </article>
          ))
        ) : (
          <div className="rounded-lg bg-surface-container p-4 text-sm text-on-surface-variant">
            No active alerts. System is currently stable.
          </div>
        )}
      </div>

      <button className="mt-5 w-full py-3 text-xs font-bold text-on-surface-variant transition-colors hover:text-on-surface">
        View All Event Logs
      </button>
    </section>
  );
}

export default AlertsPanel;
