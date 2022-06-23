import pool from "../db/connection.js";

export async function getAllResources() {
  const result = await pool.query(`SELECT * FROM resources;`);

  return result;
}

export async function addToResources(obj) {
  const result = await pool.query(
    `INSERT INTO resources (name, url, description, likes) VALUES ($1, $2, $3, $4) RETURNING *;`,
    [obj.name, obj.url, obj.description, obj.likes]
  );
  return result.rows[0];
}

export async function patchResources(obj) {
  await pool.query(`UPDATE resources SET likes = $1 WHERE id = $2`, [
    obj.likes,
    obj.id,
  ]);
}

// ,
//     (err, res) => {
//       console.log(err, res);
//       pool.end();
