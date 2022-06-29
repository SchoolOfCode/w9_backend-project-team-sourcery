import express from "express";
const router = express.Router();

import {
  getAllResources,
  addToResources,
  patchResources,
} from "../models/resources.js";

/* GETs all  resources. */
router.get("/", async function (req, res) {
  const result = await getAllResources();
  res.json(result);
});

/* Adds a row to resources table */
router.post("/", async function (req, res) {
  const resource = req.body;
  const data = await addToResources(resource);
  res.json({ success: true, payload: data });
});

//Not currently being used
// Deletes a resource from table
// router.delete("/:id", async function (req, res) {
//   let resourceId = req.params.id;
//   let resp = await deleteResource(resourceId);
//   res.send("resource deleted");
// });

// Updates the links
router.patch("/", async function (req, res) {
  const resource = req.body;
  const data = await patchResources(resource);
  res.json({ success: true, payload: data });
});

export default router;
