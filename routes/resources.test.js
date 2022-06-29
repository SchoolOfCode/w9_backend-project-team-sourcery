import { describe, test, expect } from "@jest/globals";
// import pool from "./db/connection.js";
import request from "supertest";

import router from './resources';

test("Post user", async function () {
    const response = request(router).post("/v1/resources").expect(200);
  });
  
  test("Post new user", async function () {
    let data = {
      id: expect.any(Number),
      name: expect.any(String),
      url: expect.any(String),
      description: expect.any(String),
      likes: expect.any(Number),
      week: expect.any(Number),
    };
    const response = request(router).post("/v1/resources").send(data).expect(200);
    console.log(
      `User with id of ${data.id} and username of ${data.username} has been created`
    );
  });