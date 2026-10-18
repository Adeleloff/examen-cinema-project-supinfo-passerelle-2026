# examen-cinema-project-supinfo-passerelle-2026

Lien vers mon github : https://github.com/Adeleloff/examen-cinema-project-supinfo-passerelle-2026/tree/dev

# Page de recherche

La page de recherche permet de chercher un film et d’afficher les résultats directement pendant la saisie. S’il y a encore des résultats, le bouton « Charger plus » permet d’en voir davantage.

J’ai mis un petit délai avant d’envoyer la recherche pour éviter de faire trop de requêtes inutiles pendant que l’utilisateur est encore en train d’écrire.

La recherche démarre seulement à partir de 3 caractères parce que l’API n’accepte pas les recherches trop courtes. Ça permet aussi d’éviter des résultats trop larges.​‌
