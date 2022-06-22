import express from "express";
const router = express.Router();
import { getAllResources, addToResources } from "../models/resources.js";

/* GETs all  resources. */
router.get("/", async function (req, res) {
  const result = await getAllResources();
  console.log(result, "get request");
  res.json(result);
});

/* Adds a row to resources table */
router.post("/", async function (req, res) {
  const resource = req.body;
  console.log(resource, "resource posted");
  const result = await addToResources(resource);
  res.json({ success: true });
});

export default router;
