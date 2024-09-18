import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="max-w-2xl text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Bienvenue sur mon blog dédié au développement en <span className="text-indigo-600 dark:text-indigo-400">Nextjs</span>
        </h1>
        <Link href="/articles">
          <button className="inline-block px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-600 transition duration-300">
            Lire les articles
          </button>
        </Link>
      </div>
    </div>
  );
}
