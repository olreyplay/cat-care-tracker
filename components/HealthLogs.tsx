import { healthLogs } from "@/data/dashboardData";

export default function HealthLogs() {
  return (
    <section className="mt-12 rounded-4xl bg-white p-8 shadow-sm">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
          Health
        </p>

        <h2 className="mt-3 text-3xl font-bold">Health Logs</h2>

        <p className="mt-3 text-stone-500">
          Track small daily changes in weight, mood, appetite, and behavior.
        </p>
      </div>

      <div className="mt-8 grid gap-4">
        {healthLogs.map((log) => (
          <article
            key={log.id}
            className="rounded-3xl border border-orange-100 bg-orange-50 p-5"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-semibold text-orange-500">
                  {log.date}
                </p>

                <h3 className="mt-2 text-xl font-bold">{log.mood} Mood</h3>

                <p className="mt-2 text-stone-500">{log.note}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white px-4 py-3">
                  <p className="text-xs font-semibold text-stone-400">Weight</p>

                  <p className="mt-1 font-bold">{log.weight}</p>
                </div>

                <div className="rounded-2xl bg-white px-4 py-3">
                  <p className="text-xs font-semibold text-stone-400">
                    Appetite
                  </p>

                  <p className="mt-1 font-bold">{log.appetite}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
