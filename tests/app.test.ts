
import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../src/app.js";

describe("Express Application", () => {
  it("GET /api/health returns 200", async () => {
    const response = await request(app)
      .get("/api/health");

    expect(response.status).toBe(200);
  });

  it("GET /api/health returns API status", async () => {
    const response = await request(app)
      .get("/api/health");

    expect(response.body).toEqual({
      status: "ok",
      message: "API is running"
    });
  });

  it("returns 404 for unknown routes", async () => {
    const response = await request(app)
      .get("/does-not-exist");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      error: "Route not found"
    });
  });
});
