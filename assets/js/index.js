import { searchMovies } from "./modules/api.js";

const result = await searchMovies("batman");
console.log(result);