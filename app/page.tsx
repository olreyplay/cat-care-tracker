import CatProfile from "@/components/CatProfile";
import StatCard from "@/components/StatCard";
import DailyChecklist from "@/components/DailyChecklist";
import HealthLogs from "@/components/HealthLogs";

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
          <StatCard
            label="Meals Today"
            value="0"
            helperText="No meals logged yet"
          />

          <StatCard
            label="Health Logs"
            value="0"
            helperText="No health notes added"
          />

          <StatCard
            label="Monthly Expenses"
            value="$0"
            helperText="No expenses tracked yet"
          />
        </section>

        <DailyChecklist />
        <HealthLogs />
      </div>
    </main>
  );
}
