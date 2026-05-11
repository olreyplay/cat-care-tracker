const expenses = [
  {
    id: 1,
    title: "Premium Cat Food",
    category: "Food",
    amount: 35,
  },
  {
    id: 2,
    title: "Vet Visit",
    category: "Health",
    amount: 80,
  },
  {
    id: 3,
    title: "Cat Toys",
    category: "Accessories",
    amount: 18,
  },
];

const totalExpenses = expenses.reduce((total, expense) => {
  return total + expense.amount;
}, 0);

export default function ExpenseTracker() {
  return (
    <section className="mt-12 rounded-[2rem] bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            Expenses
          </p>

          <h2 className="mt-3 text-3xl font-bold">Monthly Spending</h2>

          <p className="mt-3 text-stone-500">
            Track food, vet visits, medication, and everyday cat care costs.
          </p>
        </div>

        <div className="rounded-[1.5rem] bg-stone-900 px-8 py-6 text-white">
          <p className="text-sm text-stone-300">Total Expenses</p>

          <h3 className="mt-2 text-4xl font-bold">${totalExpenses}</h3>
        </div>
      </div>

      <div className="mt-8 grid gap-4">
        {expenses.map((expense) => (
          <article
            key={expense.id}
            className="flex items-center justify-between rounded-[1.5rem] border border-orange-100 bg-orange-50 p-5"
          >
            <div>
              <p className="text-sm font-semibold text-orange-500">
                {expense.category}
              </p>

              <h3 className="mt-2 text-xl font-bold">{expense.title}</h3>
            </div>

            <p className="text-2xl font-bold">${expense.amount}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
