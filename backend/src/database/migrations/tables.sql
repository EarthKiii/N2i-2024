-- Table pour enregistrer les temps de lecture des pop-ups
CREATE TABLE IF NOT EXISTS read_times (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    popup_id TEXT NOT NULL,
    read_time INTEGER NOT NULL
);

-- Table pour enregistrer les connexions à des pages spécifiques
CREATE TABLE IF NOT EXISTS page_connections (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    page_id TEXT NOT NULL,
    connection_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table pour enregistrer les joueurs ayant terminé le jeu à 100%
CREATE TABLE IF NOT EXISTS pantheon (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    player_name TEXT NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table pour enregistrer les parties
CREATE TABLE IF NOT EXISTS games (
    game_id INTEGER PRIMARY KEY,
    game_time INTEGER DEFAULT NULL
);

-- Table pour enregistrer les connexions au site
CREATE TABLE IF NOT EXISTS connections (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    device_type TEXT NOT NULL,
    screen_width INTEGER NOT NULL,
    screen_height INTEGER NOT NULL,
    connection_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table pour enregistrer les scores partagés
CREATE TABLE IF NOT EXISTS scores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    score INTEGER NOT NULL,
    shared_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
