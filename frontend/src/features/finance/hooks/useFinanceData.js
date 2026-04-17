import { useEffect, useMemo, useState } from "react";
import { getFinanceOverview } from "../../../services/financeService";
import { mockFinanceData } from "../data/mockFinanceData";

function getSafeFinanceData(data) {
  if (!data || typeof data !== "object") return mockFinanceData;

  return {
    chart: Array.isArray(data.chart) && data.chart.length ? data.chart : mockFinanceData.chart,
    metrics:
      Array.isArray(data.metrics) && data.metrics.length ? data.metrics : mockFinanceData.metrics,
    alerts:
      Array.isArray(data.alerts) && data.alerts.length ? data.alerts : mockFinanceData.alerts,
    servers:
      Array.isArray(data.servers) && data.servers.length ? data.servers : mockFinanceData.servers,
    procedures:
      Array.isArray(data.procedures) && data.procedures.length
        ? data.procedures
        : mockFinanceData.procedures,
    contacts:
      Array.isArray(data.contacts) && data.contacts.length
        ? data.contacts
        : mockFinanceData.contacts,
    guidelines:
      Array.isArray(data.guidelines) && data.guidelines.length
        ? data.guidelines
        : mockFinanceData.guidelines,
  };
}

export function useFinanceData() {
  const [data, setData] = useState(mockFinanceData);
  const [chartData, setChartData] = useState(mockFinanceData.chart);
  const [pulseIndex, setPulseIndex] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const response = await getFinanceOverview();
        if (!isMounted) return;
        const safeData = getSafeFinanceData(response);
        setData(safeData);
        setChartData(safeData.chart);
      } catch (err) {
        if (!isMounted) return;
        setError(err.message || "Unable to load Finance from API. Using fallback data.");
        setData(mockFinanceData);
        setChartData(mockFinanceData.chart);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!data.metrics.length) return undefined;

    const interval = setInterval(() => {
      setChartData((prev) =>
        prev.map((point, index) =>
          index === prev.length - 1
            ? {
                ...point,
                value: Math.max(35, Math.min(80, point.value + Math.floor(Math.random() * 10 - 4))),
              }
            : point
        )
      );
      setPulseIndex((prev) => (prev + 1) % data.metrics.length);
      setTimeout(() => setPulseIndex(-1), 320);
    }, 4000);

    return () => clearInterval(interval);
  }, [data.metrics.length]);

  const renderedMetrics = useMemo(
    () => data.metrics.map((metric, index) => ({ ...metric, pulse: index === pulseIndex })),
    [data.metrics, pulseIndex]
  );

  return {
    loading,
    error,
    chartData,
    metrics: renderedMetrics,
    alerts: data.alerts,
    servers: data.servers,
    procedures: data.procedures,
    contacts: data.contacts,
    guidelines: data.guidelines,
  };
}
