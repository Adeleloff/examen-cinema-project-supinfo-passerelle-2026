import { API_KEY, BASE_URL } from "./config.js";

export async function searchMovies(title, page = 1) {
  try {
    const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(title)}&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.Response === "False") {
      return { movies: [], total: 0, error: data.Error };
    }

    return {
      movies: data.Search,
      total: Number(data.totalResults),
      error: null,
    };
  } catch (error) {
    console.error("Erreur API :", error);
    return { movies: [], total: 0, error: "Impossible de contacter l'API" };
  }
}