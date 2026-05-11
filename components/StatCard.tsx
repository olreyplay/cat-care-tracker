type StatCardProps = {
  label: string;
  value: string;
  helperText: string;
};

export default function StatCard({ label, value, helperText }: StatCardProps) {
  return (
    <div className="rounded-4xl bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold text-stone-400">{label}</p>

      <h3 className="mt-4 text-4xl font-bold">{value}</h3>

      <p className="mt-3 text-sm text-stone-500">{helperText}</p>
    </div>
  );
}
