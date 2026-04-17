function MetricCard({ title, icon, value, suffix, statusText, statusColor, progress, }) {
  return (
    <article
      className={`rounded-xl bg-surface-container p-6 transition-colors hover:bg-surface-container-high `}
    >
      <div className="mb-4 flex items-start justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
          {title}
        </span>
        <span className={`material-symbols-outlined ${statusColor}`}>{icon}</span>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="font-headline text-3xl font-black text-on-surface">{value}</span>
        {suffix ? <span className="text-sm text-on-surface-variant">{suffix}</span> : null}
      </div>

      <p className={`mt-2 text-xs font-medium ${statusColor}`}>{statusText}</p>

      <div className="mt-4 flex items-center gap-2">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-container-highest">
          <div
            className={`h-full rounded-full ${statusColor.replace("text-", "bg-")}`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className={`h-2 w-2 rounded-full ${statusColor.replace("text-", "bg-")}`}></span>
      </div>
    </article>
  );
}

export default MetricCard;
