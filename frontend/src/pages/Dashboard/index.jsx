import {
  AlertsPanel,
  EmergencySectionGrid,
  MetricCard,
  ServerHealthGrid,
  ThroughputChartPanel,
} from "../../features/dashboard/components";
import { useDashboardData } from "../../features/dashboard/hooks/useDashboardData";

function Dashboard() {
  const { loading, error, chartData, metrics, alerts, servers, procedures, contacts, guidelines } =
    useDashboardData();

  return (
    <section className="flex flex-col gap-4 lg:gap-5 xl:gap-6 p-6 w-full">
      {loading ? (
        <div className="rounded-xl bg-surface-container-low p-6 text-sm text-on-surface-variant">
          Loading dashboard data...
        </div>
      ) : null}

      {error ? (
        <div className="rounded-xl bg-error/10 p-4 text-xs font-medium text-error">
          {error} Showing local fallback data.
        </div>
      ) : null}

      <div className="w-full grid grid-cols-1 gap-4 lg:gap-5 xl:gap-6 sm:grid-cols-2 lg:grid-cols-4 auto-rows-max">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      <div className="w-full flex-1 grid grid-cols-1 gap-4 lg:gap-5 xl:gap-6 lg:grid-cols-12 auto-rows-fr">
        <ThroughputChartPanel data={chartData} onExport={() => {}} />
        <AlertsPanel alerts={alerts} />
      </div>

      <ServerHealthGrid servers={servers} />
      <EmergencySectionGrid procedures={procedures} contacts={contacts} guidelines={guidelines} />
    </section>
  );
}

export default Dashboard;
