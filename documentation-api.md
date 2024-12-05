# **Documentation API Mem'EauCéan**

## Durée moyenne d'une partie 
**Méthode :** `GET`  
**Route :**  `/sherlock/average-game-time`  
**Donnée(s) retournée(s)** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| averageGameTime | int | Temps moyen pour terminer une partie en secondes |

**Exemple de réponse JSON :**
```json
{
  "averageGameTime": 532
}
```

## Moyenne du temps de lecture pour chaque pop-up d'information en partie :
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

## Moyenne du temps de lecture d'une pop-up d'information particulière en partie :
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

## Nombre de connexions à toutes les pages confondues : 
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
    "numberOfConnections": 38,
  },
}
```

## Nombre de connexions à une page spécifique : 
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

## Nombre de joueurs ayant terminé le jeu à 100 %. : 
**Méthode :** `GET`  
**Route :**  `/sherlock/all-clear`  
**Donnée(s) retournée(s)** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| allClearPlayerNumber | int | Nombre de joueurs ayant terminé le jeu à 100 % |

**Exemple de réponse JSON :**
```json
{
  "allClearPlayerNumber": 12,
}
```

## Nombre de parties lancées : 
**Méthode :** `GET`  
**Route :**  `/sherlock/game-started`  
**Donnée(s) retournée(s)** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| gameStarted | int | Nombre de parties lancées |

**Exemple de réponse JSON :**
```json
{
  "gameStarted": 12,
}
```

## Nombre de parties terminées : 
**Méthode :** `GET`  
**Route :**  `/sherlock/game-ended`  
**Donnée(s) retournée(s)** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| gameEnded | int | Nombre de parties terminées |

**Exemple de réponse JSON :**
```json
{
  "gameEnded": 12,
}
```

## Nombre de joueurs ayant saisi leur pseudo : 
**Méthode :** `GET`  
**Route :**  `/sherlock/registered-players`  
**Donnée(s) retournée(s)** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| registeredPlayers | int | Nombre de joueurs ayant saisi leur pseudo |

**Exemple de réponse JSON :**
```json
{
  "registeredPlayers": 4,
}
```

## Informations sur les connexions au site : 
**Méthode :** `GET`  
**Route :**  `/sherlock/connections`  
**Donnée(s) retournée(s)** :  
| Nom  | Type | Description |
|:----|:----|:-----------|
| connectionId | int | ID de la connexion |
| deviceType | string | Type d'appareil |
| screenSize | [int, int] | Taille de l'écran en pixels |
| connectionTime | date | Heure de la connexion |

**Exemple de réponse JSON :**
```json
{
  {
    "connectionId": 1,
    "deviceType": "PC",
    "screenSize": [1080,720],
    "connectionTime": (Date)
  },
  {
    "connectionId": 2,
    "deviceType": "iOS",
    "screenSize": [652,652],
    "connectionTime": (Date)
  },
  {
    "connectionId": 3,
    "deviceType": "Android",
    "screenSize": [652,652],
    "connectionTime": (Date)
  },
}
```

## Nombre de joueurs qui ont partagé leur score : 
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
