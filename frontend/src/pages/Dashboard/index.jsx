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
    <section className="space-y-6 p-6">

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

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <ThroughputChartPanel data={chartData} onExport={() => {}} />
        <AlertsPanel alerts={alerts} />
      </div>

      <ServerHealthGrid servers={servers} />
      <EmergencySectionGrid procedures={procedures} contacts={contacts} guidelines={guidelines} />
    </section>
  );
}

export default Dashboard;
