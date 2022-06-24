import pool from "../../connection.js";

// creates empty resources table
async function createTable() {
  const response = await pool.query(
    `CREATE TABLE IF NOT EXISTS resources (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name TEXT, url TEXT, description TEXT, likes INT, week INTEGER);`
  );
  pool.end();
  console.log(response);
}

createTable();
