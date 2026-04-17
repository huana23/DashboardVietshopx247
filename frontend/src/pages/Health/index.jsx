import { mockMonitoringData } from "../../features/dashboard/data/mockMonitoringData";
import MetricCard from "../../components/dashboard/MetricCard";
import PageContainer from "../../components/common/PageContainer";

function Health() {
  const { systemHealth, networkMetrics, microservices, systemLogs, nodePerformance, diskUsage } =
    mockMonitoringData;

  return (
    <section className="flex flex-col gap-4 lg:gap-5 xl:gap-6 p-6 w-full">
      <PageContainer
        title="Giám sát Hệ Thống"
        description="Theo dõi tình trạng các service, hiệu năng máy chủ và logs hệ thống real-time"
      />

      {/* System Health Grid */}
      <div className="w-full grid grid-cols-1 gap-4 lg:gap-5 xl:gap-6 sm:grid-cols-2 lg:grid-cols-4 auto-rows-max">
        {systemHealth.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      {/* Network & Microservices Section */}
      <div className="w-full grid grid-cols-1 gap-4 lg:gap-5 xl:gap-6 lg:grid-cols-3">
        {/* Network Metrics */}
        <div className="lg:col-span-2 bg-surface-container rounded-xl p-4 lg:p-6">
          <h3 className="text-sm lg:text-base font-bold mb-4">Lưu lượng Mạng & Tài nguyên</h3>
          <div className="grid grid-cols-3 gap-3 lg:gap-4">
            <div className="bg-surface-container-low rounded-lg p-3">
              <p className="text-xs text-on-surface-variant mb-1">Network Traffic</p>
              <p className="text-sm lg:text-base font-bold text-primary">
                {networkMetrics.traffic}
              </p>
            </div>
            <div className="bg-surface-container-low rounded-lg p-3">
              <p className="text-xs text-on-surface-variant mb-1">I/O Disk</p>
              <p className="text-sm lg:text-base font-bold">{networkMetrics.diskIO}</p>
            </div>
            <div className="bg-surface-container-low rounded-lg p-3">
              <p className="text-xs text-on-surface-variant mb-1">Thread Count</p>
              <p className="text-sm lg:text-base font-bold">{networkMetrics.threadCount}</p>
            </div>
          </div>
        </div>

        {/* Microservices */}
        <div className="bg-surface-container rounded-xl p-4 lg:p-6 flex flex-col">
          <h3 className="text-sm lg:text-base font-bold mb-3">Microservices</h3>
          <div className="space-y-2 flex-1">
            {microservices.map((service) => (
              <div
                key={service.name}
                className="bg-surface-container-low rounded-lg p-2.5 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-primary">
                    {service.icon}
                  </span>
                  <div>
                    <p className="text-xs font-bold">{service.name}</p>
                    <p className="text-[10px] text-on-surface-variant">Uptime: {service.uptime}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-primary">{service.latency}</p>
                  <div className="h-1 w-8 bg-surface-container-high rounded-full mt-0.5 overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${service.performance}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logs & Node Performance */}
      <div className="w-full grid grid-cols-1 gap-4 lg:gap-5 xl:gap-6 lg:grid-cols-2">
        {/* System Logs */}
        <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-xl overflow-hidden flex flex-col">
          <div className="bg-surface-container-high px-4 py-3">
            <h3 className="text-xs font-bold uppercase tracking-wide">Nhật ký Hệ thống (Live)</h3>
          </div>
          <div className="p-3 font-mono text-[11px] space-y-1 overflow-y-auto flex-1 max-h-48 text-on-surface-variant">
            {systemLogs.map((log, idx) => (
              <p key={idx} className="text-on-surface-variant/80">
                {log}
              </p>
            ))}
          </div>
        </div>

        {/* Node Performance */}
        <div className="bg-surface-container rounded-xl p-4 lg:p-6">
          <h3 className="text-sm lg:text-base font-bold mb-4">Hiệu năng Máy chủ (Nodes)</h3>
          <div className="space-y-4">
            {nodePerformance.map((node) => (
              <div key={node.name} className="space-y-2">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold">{node.name}</span>
                  <span className="text-[10px] text-on-surface-variant">Load: {node.loadAvg}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <div className="flex justify-between text-[10px] mb-1">
                      <span className="text-on-surface-variant">CPU</span>
                      <span className="text-primary">{node.cpu}%</span>
                    </div>
                    <div className="h-1.5 bg-surface-container-high rounded overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${node.cpu}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] mb-1">
                      <span className="text-on-surface-variant">Memory</span>
                      <span className="text-primary">{node.memory}</span>
                    </div>
                    <div className="h-1.5 bg-surface-container-high rounded overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${node.memoryPercent}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Disk Usage */}
            <div className="pt-3 border-t border-outline-variant/10">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold uppercase text-on-surface-variant">
                  Disk Usage
                </span>
                <span className="text-xs font-bold">
                  {diskUsage.used} / {diskUsage.total}
                </span>
              </div>
              <div className="h-1.5 bg-surface-container-high rounded overflow-hidden">
                <div
                  className="h-full bg-primary-container"
                  style={{ width: `${diskUsage.percent}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Health;
