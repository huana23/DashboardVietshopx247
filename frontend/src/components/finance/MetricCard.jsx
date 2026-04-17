function MetricCard({ title, icon, value, suffix, statusText, statusColor, progress }) {
  return (
    <article
      className={`h-full min-h-24 flex flex-col rounded-xl bg-surface-container p-4 lg:p-6 transition-colors hover:bg-surface-container-high `}
    >
      <div className="mb-4 flex items-start justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
          {title}
        </span>
        <span className={`material-symbols-outlined text-base lg:text-lg ${statusColor}`}>
          {icon}
        </span>
      </div>

      <div className="flex items-baseline gap-1 overflow-hidden mb-auto">
        <span className="font-headline text-xl lg:text-2xl font-black text-on-surface truncate">
          {value}
        </span>
        {suffix ? (
          <span className="text-xs text-on-surface-variant whitespace-nowrap">{suffix}</span>
        ) : null}
      </div>

      <p className={`mt-3 text-xs font-medium ${statusColor}`}>{statusText}</p>

      <div className="mt-4 flex items-center gap-2">
        <div className="h-1.5 lg:h-2 flex-1 overflow-hidden rounded-full bg-surface-container-highest">
          <div
            className={`h-full rounded-full ${statusColor.replace("text-", "bg-")}`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <span
          className={`h-1.5 lg:h-2 w-1.5 lg:w-2 rounded-full ${statusColor.replace("text-", "bg-")}`}
        ></span>
      </div>
    </article>
  );
}

export default MetricCard;
