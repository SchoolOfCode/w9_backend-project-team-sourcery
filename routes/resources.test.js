import { describe, test, expect } from "@jest/globals";
// import pool from "./db/connection.js";
import request from "supertest";
import app from "../app.js";

// POST status
describe("POST RESOURCE", function () {
  test("Post resource status code 200", async function () {
    const response = await request(app).post("/v1/resources").expect(200);
  });
});

//POST create resource
describe("POST RESOURCE", function () {
  test("Post new resource body structure", async function () {
    let data = {
      name: "Blake Lawrence",
      url: "sdafasd",
      description: "expect.any(String),",
      likes: 1,
      week: 4,
    };
    const response = await request(app)
      .post("/v1/resources")
      .send(data)
      .expect(200);
  });
});
