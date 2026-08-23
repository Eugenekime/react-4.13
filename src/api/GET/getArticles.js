export default async function getArticles(limit = 0, offset = 0) {
  const response = await fetch(
    `https://realworld.habsida.net/api/articles?limit=${limit}&offset=${offset}`,
  );
  if (!response.ok) throw new Error("Failed to load articles");
  const data = await response.json();

  return data;
}
