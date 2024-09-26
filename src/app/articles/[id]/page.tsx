// src/app/articles/[id]/page.tsx

'use client'; // Définit ce fichier comme un Client Component

import { notFound } from 'next/navigation';
import { articles } from '@/data/articlesData';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ArticlePage({ params }: { params: { id: string } }) {
  const articleId = parseInt(params.id, 10);
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    notFound();
  }

  // Fonction pour récupérer 3 articles au hasard, sauf l'article actuel
  function getRandomArticles(excludeId: number, count: number) {
    const filteredArticles = articles.filter((a) => a.id !== excludeId);
    const randomArticles = [];
    while (randomArticles.length < count && filteredArticles.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredArticles.length);
      randomArticles.push(filteredArticles[randomIndex]);
      filteredArticles.splice(randomIndex, 1); // Supprime l'article sélectionné
    }
    return randomArticles;
  }

  const [randomArticles, setRandomArticles] = useState<any[]>([]);

  useEffect(() => {
    setRandomArticles(getRandomArticles(articleId, 3));
  }, [articleId]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
          {article?.title}
        </h1>
        <div className="mb-8 text-center">
          <img
            src={article?.image}
            alt={article?.title}
            className="rounded-lg shadow-lg mx-auto max-w-full h-auto"
          />
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
          Publié le : {article?.date}
        </p>
        <div
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: article?.content || '' }}
        />
      </div>

      {/* Footer avec articles aléatoires */}
      <footer className="bg-gray-200 dark:bg-gray-800 py-6 mt-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Articles à lire
          </h2>
          <ul className="space-y-4">
            {randomArticles.map((randomArticle) => (
              <li key={randomArticle.id}>
                {/* Supprime la balise <a> */}
                <Link href={`/articles/${randomArticle.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                  {randomArticle.title}
                </Link>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Publié le : {randomArticle.date}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
