'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import './globals.css';
import { articles } from '@/data/articlesData';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Activer le mode sombre au chargement
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Fonction pour sélectionner 3 articles aléatoires
  function getRandomArticles(count: number) {
    const randomArticles = [];
    const availableArticles = [...articles];
    while (randomArticles.length < count && availableArticles.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableArticles.length);
      randomArticles.push(availableArticles[randomIndex]);
      availableArticles.splice(randomIndex, 1); // Supprime l'article sélectionné
    }
    return randomArticles;
  }

  const [randomArticles, setRandomArticles] = useState<any[]>([]);

  // Sélectionner les articles aléatoires au montage
  useEffect(() => {
    setRandomArticles(getRandomArticles(3));
  }, []);

  return (
    <html lang="fr" className="dark">
      <body className="bg-gray-900 text-white font-sans min-h-screen">
        <Navbar />
        <main>{children}</main>

        {/* Footer avec articles aléatoires sous forme de cartes */}
        <footer className="bg-gray-800 py-6 mt-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-gray-100 mb-8">Articles à lire</h2>

            {/* Grid container pour les articles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {randomArticles.map((article) => (
                <div key={article.id} className="bg-gray-700 rounded-lg shadow-lg p-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
                  <p className="text-gray-300 mb-4">{article.description}</p>
                  <Link href={`/articles/${article.id}`} passHref>
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded">
                      Lire plus
                    </button>
                  </Link>
                  <p className="text-gray-400 text-sm mt-4">Publié le : {article.date}</p>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
