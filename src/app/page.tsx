import Link from 'next/link';
import { articles } from '@/data/articlesData';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      {/* Hero Section - Bandeau plus compact */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-900">
        <h1 className="text-4xl font-bold text-white">
          The latest Next.js news
        </h1>
        <p className="mt-2 text-lg text-gray-200">
          Découvrez les meilleures pratiques pour développer des applications modernes avec Next.js, Prisma, TailwindCSS, et bien plus encore !
        </p>
        {/* Image below the hero section */}
      <div className="max-w-7xl mx-auto my-8">
        <img
          src="https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=3840&q=75"
          alt="Next.js Features"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all hover:shadow-2xl">
            <img
              src={article.image}
              alt={article.title}
              className="rounded-lg w-full h-48 object-cover mb-6"
            />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              {article.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {article.description}
            </p>
            <Link href={`/articles/${article.id}`}>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full">
                Lire plus
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
