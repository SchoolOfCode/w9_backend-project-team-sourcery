import express from "express";

import logger from "morgan";
import cors from "cors";
import resourcesRouter from "./routes/resources.js";

const app = express();

app.use(logger("dev"));
app.use(express.json());

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
  //   cors({
  //     origin: "http://localhost:3000",
  //     methods: ["GET", "POST", "DELETE", "PATCH"],
  //     allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
  //     cedentials: true,
  //   }),
  resourcesRouter
);

// app.use(function (req, res, next) {
//   res
//     .status(404)
//     .json({ message: "We couldn't find what you were looking for 😞" });
// });

// app.use(function (err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).json(err);
// });

export default app;
