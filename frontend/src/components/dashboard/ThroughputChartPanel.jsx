import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function ThroughputChartPanel({ data, onExport }) {
  const hasData = Array.isArray(data) && data.length > 0;

  return (
    <section className="rounded-xl bg-surface-container-low p-6 lg:col-span-8">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-headline text-lg font-bold text-on-surface">
            System Load & CPU Utilization
          </h2>
          <p className="text-sm text-on-surface-variant/70">Traffic analysis over last 24 hours</p>
        </div>
        <div className="flex gap-2">
          <span className="rounded-full border border-primary/20 bg-surface-container-high px-3 py-1 text-[10px] font-bold text-primary">
            LIVE
          </span>
          <button
            onClick={onExport}
            className="rounded-full bg-surface-container-highest px-3 py-1 text-[10px] font-bold text-on-surface-variant"
          >
            24H
          </button>
          <button
            onClick={onExport}
            className="rounded-full bg-surface-container-highest px-3 py-1 text-[10px] font-bold text-on-surface-variant"
          >
            7D
          </button>
        </div>
      </div>

      {hasData ? (
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#00dfc1" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#00dfc1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(61, 73, 77, 0.1)" vertical={false} />
              <XAxis
                dataKey="time"
                tick={{ fill: "#bcc9ce", fontSize: 10 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#bcc9ce", fontSize: 10 }}
                axisLine={false}
                tickLine={false}
                width={30}
              />
              <Tooltip
                contentStyle={{
                  background: "rgba(6, 14, 32, 0.6)",
                  border: "1px solid rgba(61, 73, 77, 0.15)",
                  borderRadius: "12px",
                  backdropFilter: "blur(24px)",
                  color: "#dae2fd",
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#00dfc1"
                strokeWidth={2}
                fill="url(#chartGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="grid h-64 place-items-center rounded-lg bg-surface-container text-sm text-on-surface-variant">
          No chart data available.
        </div>
      )}
    </section>
  );
}

export default ThroughputChartPanel;
