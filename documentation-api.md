# **Documentation API Mem'Océan**

## GET

### Moyenne du temps de lecture pour chaque pop-up d'information en partie :
**Méthode :** `GET`  
**Route :**  `/sherlock/read-time`  
**Donnée(s) retournée(s)** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| popupId | string | Identifiant de la pop-up d'information |
| averageReadTime | int | Temps passé à consulter les informations de la pop-up en secondes PENDANT UNE PARTIE |

**Exemple de réponse JSON :**
```json
{
  {
    "popupId": "flow-control",
    "averageReadTime": 50,
  },
  {
    "popupId": "filtering",
    "averageReadTime": 40,
  },
  ...
}
```

### Moyenne du temps de lecture d'une pop-up d'information particulière en partie :
**Méthode :** `GET`  
**Route :**  `/sherlock/read-time/{popupId}`  
**Donnée(s) retournée(s)** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| popupId | string | Identifiant de la pop-up d'information |
| averageReadTime | int | Temps passé à consulter les informations de la pop-up en secondes PENDANT UNE PARTIE |

**Exemple de réponse JSON :**
```json
{
  "popupId": "cleaning",
  "averageReadTime": 50,
},
```

### Nombre de connexions à toutes les pages confondues : 
**Méthode :** `GET`  
**Route :**  `/sherlock/pages-connections`  
**Donnée(s) retournée(s)** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| pageId | string | Identifiant de la page |
| numberOfConnections | int | Nombre de connexions à toutes les pages du site |

**Exemple de réponse JSON :**
```json
{
  {
    "pageId": "home",
    "numberOfConnections": 201,
  },
  {
    "pageId": "play",
    "numberOfConnections": 172,
  },
  {
    "pageId": "collection",
    "numberOfConnections": 70,
  },
  {
    "pageId": "pantheon",
    "numberOfConnections": 38,
  },
  {
    "pageId": "credits",
    "numberOfConnections": 3,
  },
}
```

### Nombre de connexions à une page spécifique : 
**Méthode :** `GET`  
**Route :**  `/sherlock/pages-connections/{pageId}`  
**Donnée(s) retournée(s)** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| pageId | string | Identifiant de la page |
| numberOfConnections | int | Nombre de connexions à la page demandée |

**Exemple de réponse JSON :**
```json
{
  "pageId": "collection",
  "numberOfConnections": 420,
}
```

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
{
  {
    "playerName": "titusse",
    "date": (Date)
  },
  {
    "playerName": "Obama2.0",
    "date": (Date)
  },
    {
    "playerName": "EarthKii",
    "date": (Date)
  },
    {
    "playerName": "Alaix",
    "date": (Date)
  },
    {
    "playerName": "Dodo",
    "date": (Date)
  },
}
```

### Nombre de parties lancées/terminées : 
**Méthode :** `GET`  
**Route :**  `/sherlock/games`  
**Donnée(s) retournée(s)** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| gameId | int | Identifiant de la partie |
| gameTime | int | Temps de la partie |

**Exemple de réponse JSON :**
```json
{
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
}
```

### Informations sur les connexions au site : 
**Méthode :** `GET`  
**Route :**  `/sherlock/connections`  
**Donnée(s) retournée(s)** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| deviceType | string | Type d'appareil |
| screenSize | [int, int] | Taille de l'écran en pixels |
| connectionTime | date | Heure de la connexion |

**Exemple de réponse JSON :**
```json
{
  {
    "deviceType": "PC",
    "screenSize": [1080,720],
    "connectionTime": (Date)
  },
  {
    "deviceType": "iOS",
    "screenSize": [652,652],
    "connectionTime": (Date)
  },
  {
    "deviceType": "Android",
    "screenSize": [652,652],
    "connectionTime": (Date)
  },
  ...
}
```

### Nombre de joueurs qui ont partagé leur score : 
**Méthode :** `GET`  
**Route :**  `/sherlock/score-shared`  
**Donnée(s) retournée(s)** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| scoreShared | int | Nombre de joueurs qui ont partagé leur score |

**Exemple de réponse JSON :**
```json
{
  "scoreShared": 13,
}
```

## POST

### Ajouter un temps de lecture de pop-up : 
**Méthode :** `POST`  
**Route :**  `/sherlock/read-time`  
**Attributs** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| popupId | string | Identifiant de la pop-up d'information |
| readTime | int | Temps de lecture de la pop-up d'information PENDANT LA PARTIE |

**Exemple de structure JSON :**
```json
{
  "popupId": "flux-control",
  "readTime": 13,
}
```

### Ajouter une nouvelle connexion à une page : 
**Méthode :** `POST`  
**Route :**  `/sherlock/pages-connections`  
**Attributs** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| pageId | string | Identifiant de la page |

**Exemple de structure JSON :**
```json
{
  "pageId": "collection",
}
```

### Ajouter un nouveau joueur au Panthéon : 
**Méthode :** `POST`  
**Route :**  `/sherlock/pantheon`  
**Attributs** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| playerName | int | Nom du joueur |
| date | date | Date d'obtention du 100% |

**Exemple de structure JSON :**
```json
{
  "playerName": "Evan",
  "date": (Date),
}
```

### Ajouter une nouvelle partie lancée : 
**Méthode :** `POST`  
**Route :**  `/sherlock/games`  
**Attributs** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| gameId | int | Identifiant de la partie |

**Exemple de structure JSON :**
```json
{
  "gameId": 1,
}
```

### Ajouter un nouveau partage de score : 
**Méthode :** `POST`  
**Route :**  `/sherlock/score-shared`  
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

### Ajouter une nouvelle connexion au site : 
**Méthode :** `POST`  
**Route :**  `/sherlock/connections`  
**Attributs** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| deviceType | string | Type d'appareil |
| screenSize | [int, int] | Taille de l'écran en pixels |
| connectionTime | date | Heure de la connexion |

**Exemple de structure JSON :**
```json
{
  "deviceType": "PC",
  "screenSize": [1080,720],
  "connectionTime": (Date)
},
```

## PUT

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
  "gameTime": 13,
}
```
