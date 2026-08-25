export default async function getTags() {
  const response = await fetch(`https://realworld.habsida.net/api/tags`);
  if (!response.ok) throw new Error('Failed to load tags');
  const data = await response.json();

  return data;
}
