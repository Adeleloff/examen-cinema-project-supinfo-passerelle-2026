import { getMovieByTitle } from "./modules/api.js";
import { createMovieCard } from "./modules/movie-card.js";
import { MOVIES_PER_LOAD, TRENDING_YEAR, TRENDING_TITLES } from "./modules/config.js";

const moviesContainer = document.querySelector("#movies");
const loadMoreBtn = document.querySelector("#load-more");
let loadedCount = 0;

async function loadMovies() {
  loadMoreBtn.disabled = true;

  const titles = TRENDING_TITLES.slice(loadedCount, loadedCount + MOVIES_PER_LOAD);
  const results = await Promise.all(
    titles.map((title) => getMovieByTitle(title, TRENDING_YEAR))
  );

  results
    .filter((movie) => movie !== null)
    .forEach((movie) => moviesContainer.appendChild(createMovieCard(movie)));

  loadedCount += titles.length;

  if (loadedCount >= TRENDING_TITLES.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.disabled = false;
  }
}

loadMoreBtn.addEventListener("click", loadMovies);
loadMovies();