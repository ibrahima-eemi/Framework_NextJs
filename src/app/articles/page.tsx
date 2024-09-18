export default function ArticlesPage() {
  
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
    {
      id: 4,
      title: "Déploiement de Next.js avec Vercel",
      description: "Apprenez à déployer vos applications Next.js sur Vercel rapidement et efficacement.",
      date: "2024-09-05",
    },
    {
      id: 5,
      title: "Optimisation des performances Next.js",
      description: "Découvrez comment optimiser les performances de vos applications Next.js.",
      date: "2024-09-04",
    },
    {
      id: 6,
      title: "Next.js et GraphQL",
      description: "Une introduction à l'intégration de GraphQL avec Next.js pour des API plus flexibles.",
      date: "2024-09-03",
    },
    {
      id: 7,
      title: "Sécuriser vos applications Next.js",
      description: "Découvrez les meilleures pratiques pour sécuriser vos applications Next.js.",
      date: "2024-09-02",
    },
    {
      id: 8,
      title: "Internationalisation avec Next.js",
      description: "Gérez plusieurs langues dans vos applications Next.js grâce à l'internationalisation.",
      date: "2024-09-01",
    },
    {
      id: 9,
      title: "Server-side Rendering (SSR) avec Next.js",
      description: "Comprenez comment fonctionne le rendu côté serveur dans Next.js.",
      date: "2024-08-31",
    },
    {
      id: 10,
      title: "Static Site Generation (SSG) avec Next.js",
      description: "Apprenez à utiliser la génération de sites statiques avec Next.js pour améliorer les performances.",
      date: "2024-08-30",
    },
    {
      id: 11,
      title: "API Routes dans Next.js",
      description: "Utilisez les routes API intégrées de Next.js pour créer des endpoints back-end.",
      date: "2024-08-29",
    },
    {
      id: 12,
      title: "Styles globaux et CSS modules avec Next.js",
      description: "Gérez efficacement les styles globaux et locaux avec Next.js.",
      date: "2024-08-28",
    },
    {
      id: 13,
      title: "Création de layouts dynamiques dans Next.js",
      description: "Apprenez à créer des layouts dynamiques réutilisables dans vos applications.",
      date: "2024-08-27",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">Articles</h1>
        <div className="space-y-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{article.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{article.description}</p>
              <div className="text-gray-500 dark:text-gray-400 text-sm mt-4">Publié le : {article.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
