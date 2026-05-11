"use client";
import { useState } from "react";
import CatProfile from "@/components/CatProfile";
import StatCard from "@/components/StatCard";
import DailyChecklist from "@/components/DailyChecklist";
import HealthLogs from "@/components/HealthLogs";
import ExpenseTracker from "@/components/ExpenseTracker";
import { careTasks, expenses, healthLogs } from "@/data/dashboardData";
import CareCharts from "@/components/CareCharts";

export default function HomePage() {
  const [tasks, setTasks] = useState(careTasks);

  function toggleTask(id: number) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }

        return task;
      }),
    );
  }

  const completedTasks = tasks.filter((task) => task.completed).length;

  const totalExpenses = expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);

  return (
    <main className="min-h-screen bg-orange-50 text-stone-900">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Cat Care
            </p>

            <h1 className="mt-3 text-5xl font-bold tracking-tight">
              Mochi&apos;s Daily Care
            </h1>
          </div>

          <div className="rounded-full bg-white px-5 py-3 text-sm font-medium shadow-sm">
            Healthy And Happy
          </div>
        </header>

        <CatProfile />

        <section className="mt-6 grid gap-6 md:grid-cols-3">
          <StatCard
            label="Care Tasks"
            value={`${completedTasks}/${tasks.length}`}
            helperText="Completed today"
          />

          <StatCard
            label="Health Logs"
            value={String(healthLogs.length)}
            helperText="Recent health notes"
          />

          <StatCard
            label="Monthly Expenses"
            value={`$${totalExpenses}`}
            helperText="Tracked this month"
          />
        </section>

        <DailyChecklist tasks={tasks} onToggleTask={toggleTask} />
        <HealthLogs />
        <ExpenseTracker />
        <CareCharts />
      </div>
    </main>
  );
}
