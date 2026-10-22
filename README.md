# examen-cinema-project-supinfo-passerelle-2026

Lien vers mon github : https://github.com/Adeleloff/examen-cinema-project-supinfo-passerelle-2026

# Page de recherche

La page de recherche permet de chercher un film et d’afficher les résultats directement pendant la saisie. S’il y a encore des résultats, le bouton « Charger plus » permet d’en voir davantage.

J’ai mis un petit délai avant d’envoyer la recherche pour éviter de faire trop de requêtes inutiles pendant que l’utilisateur est encore en train d’écrire.

La recherche démarre seulement à partir de 3 caractères parce que l’API n’accepte pas les recherches trop courtes. Ça permet aussi d’éviter des résultats trop larges.​‌


# Page de détail
La page de détail sert à afficher toutes les informations d’un film : titre, affiche, résumé, genres, acteurs, notes et date de sortie DVD.

Quand on clique sur « En savoir plus », l’identifiant du film est passé dans l’URL. Je le récupère avec la fonction getUrlParam, puis j’effectue une requête avec i= pour obtenir toutes les informations du film. À la différence de s= utilisé sur la page de recherche, i= renvoie les détails d’un seul film. Le paramètre plot=full permet d'obtenir le résumé complet.

J’ai également géré quelques cas particuliers : identifiant manquant ou incorrect, affiche absente et date DVD non disponible (N/A).