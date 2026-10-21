export function getPoster(poster) {
  return poster && poster !== "N/A" ? poster : "assets/images/no-poster.png";
}

export function getUrlParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

export function formatDate(dateString) {
  if (!dateString || dateString === "N/A") {
    return "Non disponible";
  }
  const date = new Date(dateString);
  if (isNaN(date)) {
    return "Non disponible";
  }
  return date.toLocaleDateString("fr-FR");
}