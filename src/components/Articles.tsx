// src/components/Articles.tsx
import { gql, useQuery } from '@apollo/client';

const GET_ARTICLES = gql`
  query {
    articles {
      id
      title
      content
    }
  }
`;

export default function Articles() {
  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.articles.map((article: any) => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  );
}
