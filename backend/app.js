const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const URI = process.env.URI;

const PORT = 2323;

const router = require("./routes/routes");

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyparser.json());

app.use(router);

mongoose
  .connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

app.listen(PORT, () => {
  console.log(`Server started listing on Port ${PORT}`);
});
