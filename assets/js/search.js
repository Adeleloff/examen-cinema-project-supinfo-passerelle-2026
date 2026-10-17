import { searchMovies } from "./modules/api.js";
import { createMovieCard } from "./modules/movie-card.js";

const input = document.querySelector("#search-input");
const resultsContainer = document.querySelector("#results");
const message = document.querySelector("#message");
const loadMoreBtn = document.querySelector("#load-more");

let currentQuery = "";
let currentPage = 1;

let timer;

loadMoreBtn.style.display = "none";

async function loadResults() {
    const { movies, total, error } = await searchMovies(currentQuery, currentPage);

    if (error) {
        message.textContent = "Aucun film trouvé pour cette recherche.";
        loadMoreBtn.style.display = "none";
        return;
    }

    message.textContent = total + " résultat(s)";
    movies.forEach((movie) => {
        resultsContainer.appendChild(createMovieCard(movie));
    });
    currentPage++;

    if (resultsContainer.children.length >= total) {
        loadMoreBtn.style.display = "none";
    } else {
        loadMoreBtn.style.display = "block";
    }
}

function handleInput() {
    currentQuery = input.value.trim();
    currentPage = 1;
    resultsContainer.textContent = "";
    loadMoreBtn.style.display = "none";

    if (currentQuery.length < 3) {
        message.textContent = "Tapez au moins 3 caractères pour lancer la recherche.";
        return;
    }

    loadResults();
}

input.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(handleInput, 500);
});

loadMoreBtn.addEventListener("click", loadResults);