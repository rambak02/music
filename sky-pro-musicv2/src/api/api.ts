const baseUrl = "https://skypro-music-api.skyeng.tech/catalog";
export async function getTracks() {
  const response = await fetch(baseUrl + "/track/all", {
    method: "GET",
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  }
  return response.json();
}
