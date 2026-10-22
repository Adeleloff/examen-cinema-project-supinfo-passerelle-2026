import { getMovieById } from "./modules/api.js";
import { getUrlParam, getPoster, formatDate } from "./modules/helpers.js";

console.log(formatDate("07 Dec 2010"));
console.log(formatDate("N/A"));
console.log(formatDate("pas une date"));

const message = document.querySelector("#message");
const details = document.querySelector("#movie-details");
const poster = document.querySelector("#movie-poster");
const title = document.querySelector("#movie-title");
const plot = document.querySelector("#movie-plot");
const genre = document.querySelector("#movie-genre");
const actors = document.querySelector("#movie-actors");
const dvd = document.querySelector("#movie-dvd");
const ratings = document.querySelector("#movie-ratings");

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
  dvd.textContent = formatDate(movie.DVD);

  ratings.textContent = "";
  if (movie.Ratings && movie.Ratings.length > 0) {
    movie.Ratings.forEach((rating) => {
      const li = document.createElement("li");
      li.textContent = rating.Source + " : " + rating.Value;
      ratings.appendChild(li);
    });
  } else {
    ratings.textContent = "Aucune note disponible.";
  }

  document.title = movie.Title;
  details.style.display = "flex";
  console.log(movie);
}

showMovie();