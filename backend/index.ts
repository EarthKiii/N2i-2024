import express from "express";
import bodyParser from "body-parser";
import DataRoutes from "./src/routes/dataRoutes.js";

const app = express();
app.use(bodyParser.json());

app.use("/api", DataRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});