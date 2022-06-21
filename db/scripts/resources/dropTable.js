import query from "../../connection.js";

// deletes resources table
async function dropTable() {
  const res = await query(`DROP TABLE IF EXISTS resources;`);
  console.log(res.command, "dropped resources table");
}

dropTable();