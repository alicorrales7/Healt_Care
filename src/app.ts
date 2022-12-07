import "reflect-metadata";

import express from "express";
import path from "path";

import { loadApiEndpoints } from "./controllers/api";
import { fileRoute } from "./routes/fileRoutes";
//import { connectDB } from "./util/connection";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);

//connectDB();

loadApiEndpoints(app);
fileRoute(app);

export default app;
