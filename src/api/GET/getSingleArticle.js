export default async function getSingleArticle(slug) {
  const response = await fetch(
    `https://realworld.habsida.net/api/articles/${slug}`,
  );
  if (!response.ok) throw new Error("Failed to load an article");
  const data = await response.json();

  return data;
}
