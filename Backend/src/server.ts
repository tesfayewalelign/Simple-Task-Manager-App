import express from "express";
import app from "./app";

const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
