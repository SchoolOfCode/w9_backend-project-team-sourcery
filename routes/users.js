import express from "express";
const router = express.Router();
import { getAllResources, addToResources } from "../models/resources.js";

/* GETs all  resources. */
router.get("/v1/", async function (req, res, next) {
  const result = await getAllResources();
  res.json(result);
});

/* Adds a row to resources table */
router.post("/v1/", async function (req, res) {
  const resource = req.body;
  addToResources(resource);
  console.log(res);
});

export default router;
