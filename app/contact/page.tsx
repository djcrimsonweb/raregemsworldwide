export default function Contact() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-2 text-gray-600">Contactez-nous pour les ventes privées et les expositions.</p>

        <form className="mt-6 grid grid-cols-1 gap-4">
          <input className="p-3 border rounded-md" placeholder="Votre nom" />
          <input className="p-3 border rounded-md" placeholder="Email" />
          <textarea className="p-3 border rounded-md" rows={4} placeholder="Message" />
          <button type="button" className="px-4 py-2 bg-emerald-600 text-white rounded-md">Envoyer</button>
        </form>

      </div>
    </main>
  );
}
