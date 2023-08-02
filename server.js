"use strict";

const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const employeeEndPoint = require("./routes/employee.route");
const eventEndPoint = require("./routes/event.route");
const projectEndPoint = require("./routes/project.route");
const userEndPoint = require("./routes/user.route");

app.use(cors());
app.use(express.json());
app.use(employeeEndPoint);
app.use(eventEndPoint);
app.use(projectEndPoint);
app.use(userEndPoint);

app.get("/", (req, res) => {
  res.status(200).send("Server is up and alive");
});

const start = (port) => {
  app.listen(port, () => console.log(`Listening to port ${port}`));
};

module.exports = {
  app,
  start,
};
