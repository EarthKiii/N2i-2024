import express from "express";
import bodyParser from "body-parser";
import DataRoutes from "./routes/dataRoutes";

const app = express();
app.use(bodyParser.json());

app.use("/api", GameRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});