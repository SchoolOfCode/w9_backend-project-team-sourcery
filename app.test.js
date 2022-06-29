import { describe, test, expect } from "@jest/globals";
import pool from "./db/connection.js";
import request from "supertest";

import app from "./app.js";

// GET ALL USERS ROUTE
describe("GET ALL RESOURCES", function () {
  test("Get all resources status code 200", async function () {
    const response = await request(app).get("/v1/resources");
    expect(response.status).toEqual(200);
  });
});

describe("GET ALL RESOURCES", function () {
  test("Get all resources body structure", async function () {
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
});
