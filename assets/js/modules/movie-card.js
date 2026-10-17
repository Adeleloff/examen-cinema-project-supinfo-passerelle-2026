import { getPoster } from "./helpers.js";

export function createMovieCard(movie) {
  const card = document.createElement("article");
  card.classList.add("movie-card");

  const img = document.createElement("img");
  img.src = getPoster(movie.Poster);
  img.alt = `Affiche de ${movie.Title}`;

  const title = document.createElement("h3");
  title.textContent = movie.Title;

  const link = document.createElement("a");
  link.href = `movie.html?id=${movie.imdbID}`;
  link.textContent = "En savoir plus";

  card.appendChild(img);
  card.appendChild(title);
  if (movie.Plot && movie.Plot !== "N/A") {
    const plot = document.createElement("p");
    plot.textContent = movie.Plot;
    card.appendChild(plot);
  }
  card.appendChild(link);

  return card;
}
