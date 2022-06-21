import query from "../db/connection.js";

export async function getAllResources() {
  const result = await query(`SELECT * FROM resources;`);
  return result.rows;
}

export async function addToResources(obj) {
  const result = await query(
    `INSERT INTO resources (name, url, description) VALUES ($1, $2, $3) RETURNING *;`,
    [obj.name, obj.url, obj.description]
  );
  console.log(result);
}
