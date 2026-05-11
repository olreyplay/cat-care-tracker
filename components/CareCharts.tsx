"use client";

import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { expenses, healthLogs } from "@/data/dashboardData";

const expenseChartData = expenses.map((expense) => ({
  name: expense.category,
  amount: expense.amount,
}));

const weightChartData = healthLogs
  .map((log) => ({
    date: log.date,
    weight: Number(log.weight.replace(" kg", "")),
  }))
  .reverse();

export default function CareCharts() {
  return (
    <section className="mt-12 rounded-4xl bg-white p-8 shadow-sm">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
          Charts
        </p>

        <h2 className="mt-3 text-3xl font-bold">Care Overview</h2>

        <p className="mt-3 text-stone-500">
          View cat care trends with simple visual summaries.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-orange-50 p-6">
          <h3 className="text-xl font-bold">Expenses By Category</h3>

          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={expenseChartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#f97316" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-3xl bg-orange-50 p-6">
          <h3 className="text-xl font-bold">Weight History</h3>

          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weightChartData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="weight"
                  stroke="#f97316"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
