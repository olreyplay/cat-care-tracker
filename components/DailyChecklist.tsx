"use client";
import { useState } from "react";
import { careTasks } from "@/data/dashboardData";

export default function DailyChecklist() {
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

  return (
    <section className="mt-12 rounded-4xl bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            Care Tasks
          </p>

          <p className="mt-2 text-sm text-stone-500">
            {completedTasks} of {tasks.length} tasks completed today
          </p>
        </div>

        <button className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
          Add Task
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {tasks.map((task) => (
          <article
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className="flex cursor-pointer items-center justify-between rounded-2xl border border-orange-100 bg-orange-50 p-5 transition hover:border-orange-300"
          >
            <div className="flex items-center gap-4">
              <div
                className={`h-5 w-5 rounded-full border-2 ${
                  task.completed
                    ? "border-orange-500 bg-orange-500"
                    : "border-stone-300"
                }`}
              />

              <h3
                className={`text-lg font-semibold ${
                  task.completed
                    ? "text-stone-400 line-through"
                    : "text-stone-900"
                }`}
              >
                {task.title}
              </h3>
            </div>

            <p className="text-sm font-medium text-stone-400">
              {task.completed ? "Completed" : "Pending"}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
