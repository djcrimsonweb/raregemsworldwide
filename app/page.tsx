import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-8">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
          RARE GEMS
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover, collect and showcase the world's rarest gemstones.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/explore" className="px-6 py-3 bg-emerald-600 text-white rounded-md shadow hover:bg-emerald-700">
            Explorer
          </Link>
          <Link href="/contact" className="px-6 py-3 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50">
            Contact
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold">Authentic</h3>
            <p className="mt-2 text-sm text-gray-500">Verified provenance for every gem.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold">Curated</h3>
            <p className="mt-2 text-sm text-gray-500">Expertly selected, museum-quality pieces.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold">Worldwide</h3>
            <p className="mt-2 text-sm text-gray-500">Shipments and exhibits across the globe.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
