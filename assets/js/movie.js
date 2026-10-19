import { getMovieById } from "./modules/api.js";
import { getUrlParam, getPoster } from "./modules/helpers.js";

const message = document.querySelector("#message");
const details = document.querySelector("#movie-details");
const poster = document.querySelector("#movie-poster");
const title = document.querySelector("#movie-title");
const plot = document.querySelector("#movie-plot");
const genre = document.querySelector("#movie-genre");
const actors = document.querySelector("#movie-actors");

details.style.display = "none";

async function showMovie() {
  const id = getUrlParam("id");

  if (!id) {
    message.textContent = "Aucun film sélectionné";
    return;
  }

  message.textContent = "Chargement...";
  const movie = await getMovieById(id);

  if (!movie) {
    message.textContent = "Film non trouvé";
    return;
  }

  message.textContent = "";
  poster.src = getPoster(movie.Poster);
  poster.alt = "Affiche de " + movie.Title;
  title.textContent = movie.Title;
  plot.textContent = movie.Plot;
  genre.textContent = movie.Genre;
  actors.textContent = movie.Actors;

  document.title = movie.Title;
  details.style.display = "block";
}

showMovie();