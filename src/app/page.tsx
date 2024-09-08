export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="max-w-2xl text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Bienvenue sur <span className="text-indigo-600">Mon Blog</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Ceci est une belle interface front-end construite avec <span className="text-indigo-600">Next.js</span> et stylée avec <span className="text-indigo-600">TailwindCSS</span>.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition duration-300"
        >
          Lire les articles
        </a>
      </div>
    </div>
  );
}
