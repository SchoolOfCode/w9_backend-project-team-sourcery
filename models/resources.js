import pool from "../db/connection.js";

export async function getAllResources() {
  const result = await pool.query(`SELECT * FROM resources;`);

  return result;
}

export async function addToResources(obj) {
  const result = await pool.query(
    `INSERT INTO resources (name, url, description) VALUES ($1, $2, $3) RETURNING *;`,
    [obj.name, obj.url, obj.description]
  );
  return result.rows[0];
}
