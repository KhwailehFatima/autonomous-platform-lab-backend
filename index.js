"use strict";

require("dotenv").config();

const server = require("./server");

const { db } = require("./DatabaseModels/index");

db
  .sync
  // { force: true }
  ()
  .then(() => {
    server.start(process.env.PORT || 3001);
  })
  .catch((err) => {
    console.log(`Database connection error: ${err}`);
  });
