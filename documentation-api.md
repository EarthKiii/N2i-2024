# **Documentation API Mem'Océan**

## /sherlock/games

### Récupérer toutes les parties : 
**Méthode :** `GET`  
**Route :**  `/sherlock/games`  
**Donnée(s) retournée(s)** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| gameId | int | Identifiant de la partie |
| gameTime | int | Temps de la partie |

**Exemple de réponse JSON :**
```json
[
  {
    "gameId": 1,
    "gameTime": null,
  },
  {
    "gameId": 2,
    "gameTime": null,
  },
  {
    "gameId": 3,
    "gameTime": 20,
  }
  ...
]
```

### Ajouter une nouvelle partie : 
**Méthode :** `POST`  
**Route :**  `/sherlock/games`  
**Attributs** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| gameId | int | Identifiant de la partie |

**Exemple de structure JSON :**
```json
{
  "gameId": 1
}
```

### Mettre à jour une partie en ajoutant un temps de complétion : 
**Méthode :** `PUT`  
**Route :**  `/sherlock/games/{gameId}`  
**Attributs** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| gameTime | int | Temps de la partie en secondes |

**Exemple de structure JSON :**
```json
{
  "gameTime": 13
}
```

## /sherlock/read-times

### Moyenne du temps de lecture pour chaque pop-up d'information :
**Méthode :** `GET`  
**Route :**  `/sherlock/read-times`  
**Donnée(s) retournée(s)** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| popupId | string | Identifiant de la pop-up d'information |
| averageReadTime | int | Temps passé à consulter les informations de la pop-up en secondes |

**Exemple de réponse JSON :**
```json
[
  {
    "popupId": "flow-control",
    "averageReadTime": 50,
  },
  {
    "popupId": "filtering",
    "averageReadTime": 40,
  }
  ...
]
```

### Moyenne du temps de lecture d'une pop-up d'information particulière :
**Méthode :** `GET`  
**Route :**  `/sherlock/read-times/{popupId}`  
**Donnée(s) retournée(s)** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| popupId | string | Identifiant de la pop-up d'information |
| averageReadTime | int | Temps passé à consulter les informations de la pop-up en secondes |

**Exemple de réponse JSON :**
```json
{
  "popupId": "cleaning",
  "averageReadTime": 50
}
```

### Ajouter un temps de lecture de pop-up : 
**Méthode :** `POST`  
**Route :**  `/sherlock/read-times`  
**Attributs** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| popupId | string | Identifiant de la pop-up d'information |
| readTime | int | Temps de lecture de la pop-up d'information |

**Exemple de structure JSON :**
```json
{
  "popupId": "flux-control",
  "readTime": 13
}
```

## /sherlock/connections

### Récupérer toutes les informations de connexions au site : 
**Méthode :** `GET`  
**Route :**  `/sherlock/connections`  
**Donnée(s) retournée(s)** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| deviceType | string | Type d'appareil |
| screenWidth | int | Longueur de l'écran en pixels |
| screenHeight | int | Hauteur de l'écran en pixels |
| connectionTime | date | Heure de la connexion |

**Exemple de réponse JSON :**
```json
[
  {
    "deviceType": "PC",
    "screenWidth": 1080,
    "screenHeight": 720,
    "connectionTime": "2024-12-06 04:22:31"
  },
  {
    "deviceType": "iOS",
    "screenWidth": 1080,
    "screenHeight": 720,
    "connectionTime": "2024-12-06 04:22:31"
  },
  {
    "deviceType": "Android",
    "screenWidth": 1080,
    "screenHeight": 720,
    "connectionTime": "2024-12-06 04:22:31"
  }
  ...
]
```

### Ajouter une nouvelle connexion au site : 
**Méthode :** `POST`  
**Route :**  `/sherlock/connections`  
**Attributs** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| deviceType | string | Type d'appareil |
| screenWidth | int | Longueur de l'écran en pixels |
| screenHeight | int | Hauteur de l'écran en pixels |

**Exemple de structure JSON :**
```json
{
  "deviceType": "PC",
  "screenWidth": 1080,
  "screenHeight": 720
}
```

## /sherlock/connections/pages

### Nombre de connexions à toutes les pages confondues : 
**Méthode :** `GET`  
**Route :**  `/sherlock/connections/pages`  
**Donnée(s) retournée(s)** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| pageId | string | Identifiant de la page |
| numberOfConnections | int | Nombre de connexions à toutes les pages du site |

**Exemple de réponse JSON :**
```json
[
  {
    "pageId": "home",
    "numberOfConnections": 201
  },
  {
    "pageId": "game",
    "numberOfConnections": 172
  },
  {
    "pageId": "collection",
    "numberOfConnections": 70
  },
  {
    "pageId": "pantheon",
    "numberOfConnections": 38
  },
  {
    "pageId": "credits",
    "numberOfConnections": 3
  }
]
```

### Nombre de connexions à une page spécifique : 
**Méthode :** `GET`  
**Route :**  `/sherlock/connections/pages/{pageId}`  
**Donnée(s) retournée(s)** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| pageId | string | Identifiant de la page |
| numberOfConnections | int | Nombre de connexions à la page demandée |

**Exemple de réponse JSON :**
```json
{
  "pageId": "collection",
  "numberOfConnections": 420
}
```

### Ajouter une nouvelle connexion à une page : 
**Méthode :** `POST`  
**Route :**  `/sherlock/connections/pages`  
**Attributs** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| pageId | string | Identifiant de la page |

**Exemple de structure JSON :**
```json
{
  "pageId": "collection"
}
```

## /sherlock/pantheon

### Joueurs ayant terminé le jeu à 100 %. : 
**Méthode :** `GET`  
**Route :**  `/sherlock/pantheon`  
**Donnée(s) retournée(s)** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| playerName | int | Nom du joueur |
| date | date | Date d'obtention du 100% |

**Exemple de réponse JSON :**
```json
[
  {
    "playerName": "titusse",
    "date": "2024-12-06 04:22:31"
  },
  {
    "playerName": "Obama2.0",
    "date": "2024-12-06 04:22:31"
  },
    {
    "playerName": "EarthKii",
    "date": "2024-12-06 04:22:31"
  },
    {
    "playerName": "Alaix",
    "date": "2024-12-06 04:22:31"
  },
    {
    "playerName": "Dodo",
    "date": "2024-12-06 04:22:31"
  }
  ...
]
```

### Ajouter un nouveau joueur au Panthéon : 
**Méthode :** `POST`  
**Route :**  `/sherlock/pantheon`  
**Attributs** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| playerName | int | Nom du joueur |

**Exemple de structure JSON :**
```json
{
  "playerName": "Evan",
}
```

## /sherlock/scores

### Récupérer les scores partagés : 
**Méthode :** `GET`  
**Route :**  `/sherlock/scores`  
**Donnée(s) retournée(s)** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| score | int | Valeur du score partagé |
| sharedAt | date | Date du partage du score |

**Exemple de réponse JSON :**
```json
[
  {
    "score": 30,
    "sharedAt": "2024-12-06 04:22:31"
  },
  {
    "score": 56,
    "sharedAt": "2024-12-06 04:22:31"
  }
  ...
]
```

### Ajouter un nouveau partage de score : 
**Méthode :** `POST`  
**Route :**  `/sherlock/scores`  
**Attributs** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| score | int | Valeur du score partagé |

**Exemple de structure JSON :**
```json
{
  "score": 42,
}
```
