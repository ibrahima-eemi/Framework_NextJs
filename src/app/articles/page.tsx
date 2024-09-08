export default function ArticlesPage() {
    // Données d'exemple d'articles
    const articles = [
      {
        id: 1,
        title: "Introduction à Next.js",
        description: "Apprenez les bases de Next.js et comment l'utiliser pour créer des applications web modernes.",
        date: "2024-09-08",
      },
      {
        id: 2,
        title: "Prisma et Next.js",
        description: "Un guide complet sur l'utilisation de Prisma avec Next.js pour gérer vos bases de données.",
        date: "2024-09-07",
      },
      {
        id: 3,
        title: "Utiliser TailwindCSS avec Next.js",
        description: "Découvrez comment intégrer TailwindCSS à votre projet Next.js pour un style rapide et moderne.",
        date: "2024-09-06",
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Articles</h1>
          <div className="space-y-6">
            {articles.map((article) => (
              <div key={article.id} className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800">{article.title}</h2>
                <p className="text-gray-600 mt-2">{article.description}</p>
                <div className="text-gray-500 text-sm mt-4">Publié le : {article.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  