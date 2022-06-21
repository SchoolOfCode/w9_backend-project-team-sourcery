import { describe, test, expect } from "@jest/globals";
import pool from "./db/connection.js";
import request from "supertest";

import app from "./app.js";

describe("GET /users", function () {
  test("gives us back 200, with a message", async function () {
    const expectedBody = {
      message: "I wish we had some information to give you ☹️",
    };
    const actual = await request(app).get("/v1/resources");
    // expect(actual.body).toStrictEqual(expectedBody);
    expect(actual.statusCode).toBe(200);
    pool.end();
  });
});

// describe("GET /v1/resources", function () {
//   test("gives us back 200, with correct body", async function () {
//     // const expectedBody = {
//     //   success: true,
//     //   payload: [
//     //     {
//     //       name: "blake",
//     //       url: "www.google.com",
//     //       description: "this is google, have a blast looking around",
//     //     },
//     //   ],
//     // };
//     const actual = await request(app).get("/v1/resources");
//     expect(actual.status).toBe(200);
//   });
// });
