function ServerHealthGrid({ servers }) {
  const safeServers = Array.isArray(servers) ? servers : [];

  return (
    <section className="rounded-xl bg-surface-container-low p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-headline text-lg font-bold text-on-surface">Tình trạng máy chủ theo thời gian thực</h2>
        <div className="flex items-center gap-4 text-xs text-on-surface-variant">
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {safeServers.length ? (
          safeServers.map((server) => (
            <article
              key={server.name}
              className="flex items-center justify-between rounded-lg border border-outline-variant/10 bg-surface-container-high/40 p-4"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg bg-surface ${server.tone}`}
                >
                  <span className="material-symbols-outlined">dns</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">{server.name}</p>
                  <p className="text-[10px] font-mono text-on-surface-variant">{server.ip}</p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1">
                <span className={`text-xs font-mono ${server.tone}`}>{server.health}</span>
                <div className="flex gap-1">
                  {server.bars.map((bar, index) => (
                    <span
                      key={`${server.name}-${index}`}
                      className={`h-3 w-1 rounded-full ${bar}`}
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
