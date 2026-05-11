const tasks = [
  {
    id: 1,
    title: "Morning Feeding",
    completed: true,
  },
  {
    id: 2,
    title: "Refill Water Bowl",
    completed: false,
  },
  {
    id: 3,
    title: "Clean Litter Box",
    completed: false,
  },
  {
    id: 4,
    title: "Evening Feeding",
    completed: false,
  },
];

export default function DailyChecklist() {
  return (
    <section className="mt-12 rounded-[2rem] bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            Care Tasks
          </p>

          <h2 className="mt-3 text-3xl font-bold">Daily Checklist</h2>
        </div>

        <button className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
          Add Task
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {tasks.map((task) => (
          <article
            key={task.id}
            className="flex items-center justify-between rounded-2xl border border-orange-100 bg-orange-50 p-5"
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
