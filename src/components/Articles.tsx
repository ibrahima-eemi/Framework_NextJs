// src/components/Article.tsx

interface ArticleProps {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
}

export default function Article({ id, title, description, content, date }: ArticleProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all hover:bg-gray-100 dark:hover:bg-gray-200 hover:text-gray-900 dark:hover:text-gray-900 hover:shadow-2xl">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      <div
        className="text-gray-500 dark:text-gray-400 text-sm mt-4"
        dangerouslySetInnerHTML={{ __html: content }} // Utilisation de dangerouslySetInnerHTML pour interpréter le contenu HTML
      />
      <div className="text-gray-500 dark:text-gray-400 text-sm mt-4">
        Publié le : {date}
      </div>
    </div>
  );
}
