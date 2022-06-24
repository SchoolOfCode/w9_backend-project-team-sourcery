import express from "express";

import logger from "morgan";

import resourcesRouter from "./routes/resources.js";

const app = express();

app.use(logger("dev"));
app.use(express.json());

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, PATCH");
  next();
});

// setups resources router
app.use(
  "/v1/resources",

  resourcesRouter
);

export default app;
