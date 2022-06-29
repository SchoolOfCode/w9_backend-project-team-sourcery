import { describe, test, expect } from "@jest/globals";
import pool from "./db/connection.js";
import request from "supertest";

import app from "./app.js";

// GET ALL USERS ROUTE
test("tests get all status code 200", async function () {
  const response = await request(app).get("/v1/resources");
  expect(response.status).toEqual(200);
});

test("tests get all status code 400", async function () {
  const response = await request(app).get("/v1/resources");
  expect(response.status).toEqual(400);
});

test("tests get all body structure", async function () {
  const response = await request(app).get("/v1/resources");
  expect(response.body.rows).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        url: expect.any(String),
        description: expect.any(String),
        likes: expect.any(Number),
        week: expect.any(Number),
      }),
    ])
  );
});
