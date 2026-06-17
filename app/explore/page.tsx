import Link from "next/link";

export default function Explore() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900">Explorer</h1>
        <p className="mt-2 text-gray-600">Parcourez notre sélection de pierres rares.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <article key={i} className="p-4 bg-white rounded-lg shadow">
              <div className="h-40 bg-gradient-to-br from-emerald-200 to-emerald-400 rounded-md" />
              <h3 className="mt-4 font-semibold">Gem #{i}</h3>
              <p className="text-sm text-gray-500">Description courte et provenance vérifiée.</p>
              <div className="mt-3">
                <Link href="#" className="text-emerald-600 hover:underline">Voir</Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/" className="text-sm text-gray-500 hover:underline">Retour</Link>
        </div>
      </div>
    </main>
  );
}
