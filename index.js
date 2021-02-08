// installer package axios - express - cors
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const data = require("./data/data.json");

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  try {
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
app.all("*", () => {
  console.log("Road not found");
  res.status(404).json("Road not found");
});

app.listen("3001", () => {
  console.log("Server started");
});
