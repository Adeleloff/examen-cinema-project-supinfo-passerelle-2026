# examen-cinema-project-supinfo-passerelle-2026

Lien vers mon github : https://github.com/Adeleloff/examen-cinema-project-supinfo-passerelle-2026


## Lancer le projet

Le projet doit être lancé avec un serveur HTTP (les modules JavaScript ne fonctionnent pas en ouvrant directement le fichier). J'ai utilisé Live Server :

1. Ouvrir le dossier du projet dans VS Code.
2. Installer l'extension « Live Server » si ce n'est pas déjà fait.
3. Clic droit sur `index.html`, puis « Open with Live Server » (ou le bouton « Go Live » en bas à droite).
4. Le site s'ouvre dans le navigateur (en général `http://127.0.0.1:5500`).

Ma clé API OMDb est déjà renseignée dans `assets/js/modules/config.js`, il n'y a rien à configurer.


## Page d'accueil (index.html)

La page d'accueil affiche une sélection de films de 2026. Pour chaque film, on retrouve l'affiche, le titre, un court résumé et un bouton « En savoir plus ».

Comme l'API OMDb ne propose pas directement de films tendance, j'ai créé ma propre liste de films dans config.js. Les informations sont récupérées avec le paramètre t=.

Les films sont affichés par groupes de 6. Le bouton « Charger plus de films » permet d'en afficher davantage jusqu'à ce que toute la liste soit affichée.

Les requêtes sont envoyées en parallèle avec Promise.all pour charger les films plus rapidement. Si une affiche est indisponible, une image par défaut est affichée.

Note : le sujet parlait de 2024, mais mon professeur a demandé de choisir des films de 2026.


## Page de recherche (search.html)

La page de recherche permet de chercher un film et d’afficher les résultats directement pendant la saisie. S’il y a encore des résultats, le bouton « Charger plus » permet d’en voir davantage.

J’ai mis un petit délai avant d’envoyer la recherche pour éviter de faire trop de requêtes inutiles pendant que l’utilisateur est encore en train d’écrire.

La recherche démarre seulement à partir de 3 caractères parce que l’API n’accepte pas les recherches trop courtes. Ça permet aussi d’éviter des résultats trop larges.


## Page de détail (movie.html)

La page de détail sert à afficher toutes les informations d’un film : titre, affiche, résumé, genres, acteurs, notes et date de sortie DVD.

Quand on clique sur « En savoir plus », l’identifiant du film est passé dans l’URL. Je le récupère avec la fonction getUrlParam, puis j’effectue une requête avec i= pour obtenir toutes les informations du film. À la différence de s= utilisé sur la page de recherche, i= renvoie les détails d’un seul film. Le paramètre plot=full permet d'obtenir le résumé complet.

J’ai également géré quelques cas particuliers : identifiant manquant ou incorrect, affiche absente et date DVD non disponible (N/A).


## Structure du projet

- `index.html`, `search.html`, `movie.html` : les trois pages du site.
- `assets/js/index.js`, `search.js`, `movie.js` : un fichier JavaScript par page.
- `assets/js/modules/config.js` : la clé API, l'URL de base et la liste des films tendance.
- `assets/js/modules/api.js` : les requêtes vers l'API OMDb.
- `assets/js/modules/helpers.js` : les fonctions utilitaires (affiche manquante, lecture de l'URL, formatage de la date).
- `assets/js/modules/movie-card.js` : la fonction qui construit la carte d'un film, utilisée sur l'accueil et sur la recherche.
- `assets/css/` : les styles (`main.css`, `components.css`).
- `assets/images/no-poster.png` : l'image affichée quand un film n'a pas d'affiche.


## Organisation Git

- `main` : la version finale du projet.
- `dev` : la branche d'intégration, où je regroupe les fonctionnalités terminées.
- `feat/api`, `feat/home`, `feat/search`, `feat/movie`, `feat/style` : une branche par fonctionnalité.

Mes messages de commit commencent par un type : `feat:` (nouvelle fonctionnalité), `fix:` (correction), `refactor:` (réécriture du code), `docs:` (README) et `style:` (CSS).


## Limites

- La liste des films tendance est écrite à la main : elle ne se met pas à jour toute seule.
- L'API renvoie souvent « N/A » pour la date DVD, donc elle est parfois absente.
- L'API est en anglais : il faut chercher avec les titres originaux.