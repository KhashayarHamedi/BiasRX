"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

type Props = {
  data: {
    date: string;
    dpd: number;
  }[];
};

export default function BiasTrendChart({ data }: Props) {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#888" />
          <YAxis stroke="#888" domain={[0, "auto"]} />
          <Tooltip />
          <ReferenceLine y={15} stroke="#f87171" strokeDasharray="3 3" />
          <Line
            type="monotone"
            dataKey="dpd"
            stroke="#4f46e5"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
