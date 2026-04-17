function MicroservicesList({ services }) {
  return (
    <div className="bg-surface-container p-6 rounded-xl flex flex-col">
      <h2 className="text-xl font-bold font-headline mb-6">Dịch vụ Microservices</h2>
      <div className="space-y-4 flex-1">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="bg-primary-container/20 p-2 rounded">
                <span className="material-symbols-outlined text-primary text-sm">
                  {service.icon}
                </span>
              </div>
              <div>
                <p className="text-xs font-bold font-headline">{service.name}</p>
                <p className="text-[10px] text-on-surface-variant">Uptime: {service.uptime}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-primary">{service.latency}</p>
              <div className="h-1 w-12 bg-surface-container-high rounded-full overflow-hidden mt-1">
                <div
                  className="h-full bg-primary"
                  style={{ width: `${service.performance}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full py-2 bg-surface-container-high hover:bg-surface-container-highest text-primary text-[10px] font-black uppercase tracking-widest rounded transition-colors">
        Xem tất cả Services
      </button>
    </div>
  );
}

export default MicroservicesList;
