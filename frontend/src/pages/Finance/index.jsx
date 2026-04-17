// Finance.js
import { MetricCard } from "../../features/finance/components";
import { useFinanceData } from "../../features/finance/hooks/useFinanceData";

function Finance() {
  const { metrics } = useFinanceData();

  return (
    <section className="flex flex-col gap-6 p-6 w-full h-full">
      <div className="w-full h-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 auto-rows-max">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>
    </section>
  );
}

export default Finance;
