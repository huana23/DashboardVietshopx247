function ServerHealthGrid({ servers }) {
  const safeServers = Array.isArray(servers) ? servers : [];

  return (
    <section className="w-full h-full flex flex-col rounded-xl bg-surface-container-low p-4 lg:p-6">
      <div className="mb-4 lg:mb-6 flex flex-col items-start justify-between gap-3 lg:flex-row lg:items-center">
        <h2 className="font-headline text-base lg:text-lg font-bold text-on-surface">
          Tình trạng máy chủ theo thời gian thực
        </h2>
        <div className="flex items-center gap-3 lg:gap-4 text-xs text-on-surface-variant flex-wrap">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-primary"></span> Online
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-tertiary"></span> Idle
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-error"></span> Down
          </div>
        </div>
      </div>

      <div className="h-full grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
        {safeServers.length ? (
          safeServers.map((server) => (
            <article
              key={server.name}
              className="flex flex-col justify-between min-h-20 rounded-lg border border-outline-variant/10 bg-surface-container-high/40 p-3 lg:p-4"
            >
              <div className="flex items-center gap-3 mb-auto">
                <div
                  className={`flex h-10 lg:h-12 w-10 lg:w-12 items-center justify-center rounded-lg bg-surface text-base lg:text-lg ${server.tone}`}
                >
                  <span className="material-symbols-outlined">dns</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs lg:text-sm font-bold text-on-surface truncate">
                    {server.name}
                  </p>
                  <p className="text-xs font-mono text-on-surface-variant truncate">{server.ip}</p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1.5 mt-3">
                <span className={`text-xs lg:text-sm font-mono ${server.tone}`}>
                  {server.health}
                </span>
                <div className="flex gap-1">
                  {server.bars.map((bar, index) => (
                    <span
                      key={`${server.name}-${index}`}
                      className={`h-3 lg:h-4 w-1 lg:w-1.5 rounded-full ${bar}`}
                    ></span>
                  ))}
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="rounded-lg bg-surface-container p-4 text-sm text-on-surface-variant md:col-span-2 xl:col-span-3">
            No server health records available.
          </div>
        )}
      </div>
    </section>
  );
}

export default ServerHealthGrid;
