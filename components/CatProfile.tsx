/* eslint-disable @next/next/no-img-element */
const catProfile = {
  name: "Mochi",
  breed: "British Shorthair",
  age: 3,
  weight: "4.8 kg",
  lifestyle: "Indoor Cat",
  favoriteFood: "Chicken Treats",
  image:
    "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200&auto=format&fit=crop",
};

export default function CatProfile() {
  return (
    <section className="mt-12 rounded-4xl bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        <div className="flex h-40 w-40 shrink-0 items-center justify-center overflow-hidden rounded-4xl bg-orange-100">
          <img
            src={catProfile.image}
            alt={catProfile.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex-1">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            Cat Profile
          </p>

          <h2 className="mt-4 text-4xl font-bold">{catProfile.name}</h2>

          <p className="mt-4 text-stone-500">
            {catProfile.breed} • {catProfile.age} years old •{" "}
            {catProfile.weight}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-orange-50 p-4">
              <p className="text-sm font-semibold text-stone-400">Lifestyle</p>

              <h3 className="mt-2 text-xl font-bold">{catProfile.lifestyle}</h3>
            </div>

            <div className="rounded-2xl bg-orange-50 p-4">
              <p className="text-sm font-semibold text-stone-400">
                Favorite Food
              </p>

              <h3 className="mt-2 text-xl font-bold">
                {catProfile.favoriteFood}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
