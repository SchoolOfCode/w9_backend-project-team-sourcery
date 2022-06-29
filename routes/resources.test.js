import { describe, test, expect } from "@jest/globals";
// import pool from "./db/connection.js";
import request from "supertest";
import router from "./resources";

// POST status
describe("POST RESOURCE", function () {
  test("Post resource status code 200", async function () {
    const response = request(router).post("/v1/resources").expect(200);
  });
});

//POST create resource
describe("POST RESOURCE", function () {
  test("Post new resource body structure", async function () {
    let data = {
      id: expect.any(Number),
      name: expect.any(String),
      url: expect.any(String),
      description: expect.any(String),
      likes: expect.any(Number),
      week: expect.any(Number),
    };
    const response = request(router)
      .post("/v1/resources")
      .send(data)
      .expect(function (res) {
        console.log("response body blake", res);
      })
      .expect(200);
  });
});
