import pool from "../../connection.js";

// populates resources table with the given data
async function populateTable() {
  const test = [
    {
      name: "blake",
      url: "www.google.com",
      description: "this is google, have a blast looking around",
      likes: 4,
    },
    {
      name: "afam",
      url: "https://beta.reactjs.org/learn/thinking-in-react",
      description: " Guide to thinking in react from the updated React Docs",
      likes: 4,
    },
  ];
  for (let i = 0; i < test.length; i++) {
    const response = await pool.query(
      `INSERT INTO resources (name, url, description, likes) VALUES ($1, $2, $3, $4) RETURNING *;`,
      [test[i].name, test[i].url, test[i].description, test[i].likes]
    );
    console.log(response.rows);
  }
}

populateTable();
