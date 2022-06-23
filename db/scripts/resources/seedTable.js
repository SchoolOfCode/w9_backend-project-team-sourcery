import pool from "../../connection.js";


// populates resources table with the given data
async function populateTable() {
  const test = [
    {
      name: "Blake Lawrence",
      url: "http://www.postman.com",
      description: "this is postman, great for sorting out routes",
      week: 1
    },
  ];
  for (let i = 0; i < test.length; i++) {
    const response = await pool.query(
      `INSERT INTO resources (name, url, description, week) VALUES ($1, $2, $3, $4) RETURNING *;`,
      [test[i].name, test[i].url, test[i].description, test[i].week]
    );
    console.log(response.rows);
  }
}

populateTable();
