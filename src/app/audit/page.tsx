"use client";

import Layout from "@/components/ui/layout";
import SelectionChart from "@/components/charts/selection-chart";
import { Download } from "lucide-react";

const auditData = [
  { group: "Male", selectionRate: 24.5, count: 20765 },
  { group: "Female", selectionRate: 8.1, count: 10204 },
  { group: "Non-binary", selectionRate: 5.2, count: 1592 },
];

export default function AuditPage() {
  const downloadCSV = () => {
    const header = "Group,Selection Rate,Count";
    const rows = auditData.map(d => `${d.group},${d.selectionRate},${d.count}`);
    const csv = [header, ...rows].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "bias_audit.csv");
    link.click();
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">🕵️ Fairness Audit</h1>

      {/* Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow mb-8">
        <h2 className="text-lg font-semibold mb-4">📊 Selection Rate by Group</h2>
        <SelectionChart data={auditData} />
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">📋 Group Selection Summary</h2>
          <button
            onClick={downloadCSV}
            className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-sm px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
            <tr>
              <th className="px-4 py-2">Group</th>
              <th className="px-4 py-2">Selection Rate</th>
              <th className="px-4 py-2">Count</th>
            </tr>
          </thead>
          <tbody>
            {auditData.map((row, i) => (
              <tr
                key={i}
                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="px-4 py-2">{row.group}</td>
                <td className="px-4 py-2">{row.selectionRate}%</td>
                <td className="px-4 py-2">
                  {row.count ? row.count.toLocaleString() : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
