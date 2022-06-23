import pool from "../../connection.js";

// populates resources table with the given data
async function populateTable() {
  const test = [
    {
      name: "Blake Lawrence",
      url: "http://www.postman.com",
      description: "this is postman, great for sorting out routes",
      likes: 4,
      week: 1,
    },
  ];
  for (let i = 0; i < test.length; i++) {
    const response = await pool.query(
      `INSERT INTO resources (name, url, description, likes, week) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      [
        test[i].name,
        test[i].url,
        test[i].description,
        test[i].likes,
        test[i].week,
      ]
    );
    console.log(response.rows);
  }
}

populateTable();
