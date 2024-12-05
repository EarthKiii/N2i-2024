import express from "express";
import bodyParser from "body-parser";
import sqlite3 from "sqlite3";

// Importation routes API (on met .js parce que ça marche que comme ça)
import connectionRoutes from "./src/routes/connectionsRoutes.js";
import gamesRoutes from "./src/routes/gamesRoutes.js";
import pantheonRoutes from "./src/routes/pantheonRoutes.js";
import readTimesRoutes from "./src/routes/readTimesRoutes.js;
import scoresRoutes from "./src/routes/scoresRoutes.js";

const db = new sqlite3.Database('./src/database/database.db');
const app = express();

app.use(bodyParser.json());

app.get("/", (_req, res) => {
    db.serialize(() => {
        db.all('SELECT rowid AS id, info FROM lorem', (_err, rows: { id: number, info: string }[]) => {
            if (_err) {
                res.status(500).send("Error retrieving data");
            } else {
                res.json(rows);
            }
        });
    });
});

app.use("/sherlock/connections", connectionRoutes);
app.use("/sherlock/games", gamesRoutes);
app.use("/sherlock/pantheon", pantheonRoutes);
app.use("/sherlock/read-times", readTimesRoutes);
app.use("/sherlock/scores", scoresRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});