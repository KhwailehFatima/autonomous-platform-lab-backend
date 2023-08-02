"use strict";

const express = require("express");
const router = express.Router();
const {
  createEmployee,
  getAllEmployees,
} = require("../controllers/employee.controller");

router.post("/employee", createEmployee);
router.get("/employees", getAllEmployees);

module.exports = router;
