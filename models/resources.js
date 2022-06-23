import { response } from "express";
import pool from "../db/connection.js";

//Gets all resources
export async function getAllResources() {
  const result = await pool.query(`SELECT * FROM resources;`);

  return result;
}

//Add to resources table
export async function addToResources(obj) {
  const result = await pool.query(
    `INSERT INTO resources (name, url, description, week) VALUES ($1, $2, $3, $4) RETURNING *;`,
    [obj.name, obj.url, obj.description, obj.week]
  );
  return result.rows[0];
}

//Delete a resource from table

export async function deleteResource(id) {
  const result = await pool.query(`DELETE FROM resources WHERE id = $1;`, [id]);
  return result;
}
