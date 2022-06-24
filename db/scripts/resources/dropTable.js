import pool from "../../connection.js";

// deletes resources table
async function dropTable() {
  const res = await pool.query(`DROP TABLE IF EXISTS resources;`);
  pool.end();
  console.log(res.command, "dropped resources table");
}

dropTable();
