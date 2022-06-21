import express from "express";

import logger from "morgan";

import resourcesRouter from "./routes/resources.js";

const app = express();

app.use(logger("dev"));
app.use(express.json());

// setups resources router
app.use("/v1/resources", resourcesRouter);

app.use(function (req, res, next) {
  res
    .status(404)
    .json({ message: "We couldn't find what you were looking for 😞" });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json(err);
});

export default app;
