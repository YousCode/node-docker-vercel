const request = require("supertest");
const app = require("../src/hello");

describe("GET /hello/:name", () => {
  it("Should respond with a welcome message with the name", async () => {
    const response = await request(app).get("/hello/Tester");

    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual("Hello, Tester!");
  });

  it("Should respond with a welcome message with the name", async () => {
    const response = await request(app).get(`/hello/${null}`);

    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual("Hello, null!");
  });
});

describe("GET /goodbye/:name", () => {
  it("should respond with a goodbye message with the name", async () => {
    const response = await request(app).get("/goodbye/Tester");

    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual("Goodbye, Tester!");
  });

  it("should respond with a goodbye message with the name", async () => {
    const response = await request(app).get(`/goodbye/${null}`);

    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual("Goodbye, null!");
  });
});
