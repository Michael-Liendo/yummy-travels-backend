import express from "express";
import routesV1 from "./routes/routes.v1";
import swaggerRouter from "./swagger";
import { connectDB } from "./db/inde";
import dotnev from "dotenv";
dotnev.config();

import cors from "cors";

const app: express.Application = express();
const port = process.env.PORT || 8888;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use(cors());

app.use(routesV1);

app.use(swaggerRouter);
connectDB();
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

export default app;
