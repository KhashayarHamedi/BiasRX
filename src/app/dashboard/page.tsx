"use client";

import Layout from "@/components/ui/layout";
import MetricCard from "@/components/dashboard/metric-card";
import { BarChart, AlertTriangle, Users, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [metrics, setMetrics] = useState<{
    accuracy: number;
    dpd: number;
    records: number;
    alerts: number;
  } | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/metrics")
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => {
        setMetrics(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">📊 BiasRX Dashboard</h1>

      {loading ? (
        <p className="text-muted-foreground">Loading metrics...</p>
      ) : error ? (
        <p className="text-red-500">⚠️ Failed to load data from API.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-8">
          <MetricCard title="Accuracy" value={`${metrics.accuracy}%`} icon={<CheckCircle />} />
          <MetricCard title="Bias Gap (DPD)" value={`${metrics.dpd}%`} icon={<BarChart />} />
          <MetricCard title="Audited Records" value={metrics.records.toLocaleString()} icon={<Users />} />
          <MetricCard title="Alerts" value={`${metrics.alerts} Active`} icon={<AlertTriangle />} />
        </div>
      )}
    </Layout>
  );
}
