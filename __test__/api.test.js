const request = require("supertest");
const app = require("../../crud-app-mongoDb/server");

let userId = "";

describe("API Endpoints", () => {
  //   it("should get User by Id", async () => {
  //     const res = await request(app).get(`/api/users?id=${userId}`);
  //     expect(res.statusCode).toEqual(200);
  //   });
  //   it("should create a new user", async () => {
  //     const res = await request(app).post("/api/users").send({
  //       name: "tes2",
  //       email: "tes5@gmail.com",
  //       umur: 1,
  //     });
  //     expect(res.statusCode).toEqual(200);
  //   });
  //   it("should update a user", async () => {
  //     const res = await request(app).put(`/api/users/${userId}`).send({
  //       name: "tes",
  //       email: "tes4@gmail.com",
  //       umur: 2,
  //     });
  //     expect(res.statusCode).toEqual(200);
  //   });
  //   it("should delete a user", async () => {
  //     const res = await request(app).delete(`/api/users/${userId}`);
  //     expect(res.statusCode).toEqual(200);
  //   });
  it("should get all User", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toEqual(200);
    console.log(res.body);
  });
}, 10000);
