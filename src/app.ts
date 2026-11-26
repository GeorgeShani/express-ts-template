import express from "express";

const app = express();

// Parse incoming JSON request bodies
app.use(express.json());

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    message: "API is running"
  });
});

// Handle unknown endpoints
app.use((_req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

export default app;
