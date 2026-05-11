import CatProfile from "@/components/CatProfile";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-orange-50 text-stone-900">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Cat Care
            </p>

            <h1 className="mt-3 text-5xl font-bold tracking-tight">
              Mochi's Daily Care
            </h1>
          </div>

          <div className="rounded-full bg-white px-5 py-3 text-sm font-medium shadow-sm">
            Healthy And Happy
          </div>
        </header>

        <CatProfile />

        <section className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-4xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-stone-400">Meals Today</p>

            <h3 className="mt-4 text-4xl font-bold">0</h3>
          </div>

          <div className="rounded-4xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-stone-400">Health Logs</p>

            <h3 className="mt-4 text-4xl font-bold">0</h3>
          </div>

          <div className="rounded-4xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-stone-400">
              Monthly Expenses
            </p>

            <h3 className="mt-4 text-4xl font-bold">$0</h3>
          </div>
        </section>

        <section className="mt-12 rounded-4xl bg-white p-8 shadow-sm">
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

          <div className="mt-8 rounded-3xl border border-dashed border-orange-200 bg-orange-50 p-10 text-center">
            <p className="text-stone-500">No care tasks added yet.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
