function SystemHealthMetrics({ metrics }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 xl:gap-6">
      {metrics.map((item) => (
        <div
          key={item.title}
          className="bg-surface-container-low p-5 rounded-xl border-l-4"
          style={{
            borderColor:
              item.statusColor === "text-primary"
                ? "#00dfc1"
                : item.statusColor === "text-tertiary"
                  ? "#ffb95f"
                  : item.statusColor === "text-error"
                    ? "#ffb4ab"
                    : "#00dfc1",
          }}
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
              {item.title}
            </span>
            {item.pulse ? (
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
            ) : (
              <div
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor:
                    item.statusColor === "text-primary"
                      ? "#00dfc1"
                      : item.statusColor === "text-tertiary"
                        ? "#ffb95f"
                        : "#ffb4ab",
                }}
              ></div>
            )}
          </div>
          <div className="text-2xl lg:text-3xl xl:text-4xl font-bold font-headline text-on-surface mb-1">
            {item.value}
          </div>
          <div className={`text-xs font-medium flex items-center gap-1 ${item.statusColor}`}>
            <span className="material-symbols-outlined text-sm">
              {item.statusText.includes("Ổn")
                ? "trending_up"
                : item.statusText.includes("Đã kết")
                  ? "check_circle"
                  : item.statusText.includes("cao")
                    ? "error_outline"
                    : "bolt"}
            </span>
            {item.statusText}
          </div>
        </div>
      ))}
    </section>
  );
}

export default SystemHealthMetrics;
