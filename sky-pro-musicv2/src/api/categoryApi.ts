
export async function getCategory(id: string) {
  const res = await fetch(`https://webdev-music-003b5b991590.herokuapp.com/catalog/selection/${id}/`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const response = await res.json();

  return response.data;
}