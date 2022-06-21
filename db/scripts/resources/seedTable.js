import pool from "../../connection.js";


// populates resources table with the given data
async function populateTable() {
  const test = [
    {
      name: "blake",
      url: "www.google.com",
      description: "this is google, have a blast looking around",
    },
  ];
  for (let i = 0; i < test.length; i++) {
    const response = await pool.query(
      `INSERT INTO resources (name, url, description) VALUES ($1, $2, $3) RETURNING *;`,
      [test[i].name, test[i].url, test[i].description]
    );
    console.log(response.rows);
  }
}

populateTable();
