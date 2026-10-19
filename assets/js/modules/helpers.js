export function getPoster(poster) {
  return poster && poster !== "N/A" ? poster : "assets/images/no-poster.png";
}

export function getUrlParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}