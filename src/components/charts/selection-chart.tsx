"use client";

import Layout from "@/components/ui/layout";
import MetricCard from "@/components/dashboard/metric-card";
import BiasTrendChart from "@/components/charts/bias-trend";
import { BarChart, AlertTriangle, Users, CheckCircle } from "lucide-react";

export default function DashboardPage() {
  const biasGap = 16.4;

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">📊 BiasRX Dashboard</h1>

      {/* High Bias Alert */}
      {biasGap > 15 && (
        <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 border-l-4 border-yellow-400 p-4 mb-6 rounded-md">
          ⚠️ <strong>High Bias Alert:</strong> The current Bias Gap (DPD) is{" "}
          <strong>{biasGap}%</strong>, which exceeds the acceptable threshold.
          Please review model fairness.
        </div>
      )}

      {/* Summary Metrics */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-8">
        <MetricCard title="Accuracy" value="84.9%" icon={<CheckCircle />} />
        <MetricCard title="Bias Gap (DPD)" value={`${biasGap}%`} icon={<BarChart />} />
        <MetricCard title="Audited Records" value="32,561" icon={<Users />} />
        <MetricCard title="Alerts" value="1 Active" icon={<AlertTriangle />} />
      </div>

      {/* Bias Trend */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow mb-8">
        <h2 className="text-lg font-semibold mb-4">📈 Bias Gap (DPD) Over Time</h2>
        <BiasTrendChart
          data={[
            { date: "2025-05-01", dpd: 9.8 },
            { date: "2025-05-10", dpd: 11.3 },
            { date: "2025-05-15", dpd: biasGap },
          ]}
        />
      </div>

      {/* Recent Audit Summary */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
        <h2 className="text-lg font-semibold mb-4">🗂 Recent Audit Snapshots</h2>
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Model</th>
              <th className="px-4 py-2">Accuracy</th>
              <th className="px-4 py-2">Bias (DPD)</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                date: "2025-05-15",
                model: "v1.2",
                accuracy: "84.9%",
                bias: `${biasGap}%`,
                status: "⚠️ High Bias",
              },
              {
                date: "2025-05-10",
                model: "v1.1",
                accuracy: "87.2%",
                bias: "11.3%",
                status: "✅ Acceptable",
              },
              {
                date: "2025-05-01",
                model: "v1.0",
                accuracy: "85.4%",
                bias: "9.8%",
                status: "✅ Acceptable",
              },
            ].map((row, i) => (
              <tr
                key={i}
                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="px-4 py-2">{row.date}</td>
                <td className="px-4 py-2">{row.model}</td>
                <td className="px-4 py-2">{row.accuracy}</td>
                <td className="px-4 py-2">{row.bias}</td>
                <td className="px-4 py-2">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
