import express from "express";
import bodyParser from "body-parser";

// Importation routes API (on met .js parce que ça marche que comme ça)
import connectionRoutes from "./src/routes/connectionsRoutes.js";
import gamesRoutes from "./src/routes/gamesRoutes.js";
import pantheonRoutes from "./src/routes/pantheonRoutes.js";
import readTimesRoutes from "./src/routes/readTimesRoutes.js";
import scoresRoutes from "./src/routes/scoresRoutes.js";

const app = express();

app.use(bodyParser.json());


app.use("/sherlock", connectionRoutes);
app.use("/sherlock", gamesRoutes);
app.use("/sherlock", pantheonRoutes);
app.use("/sherlock", readTimesRoutes);
app.use("/sherlock", scoresRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});