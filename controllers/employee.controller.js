"use strict";

const { employeeModel } = require("../DatabaseModels/index");

async function createEmployee(req, res) {
  try {
    console.log("-------------------------------------------------------");
    const employeeDescription = req.body;
    const addedEmployee = await employeeModel.create(employeeDescription);
    console.log({ addedEmployee });
    res.status(201).json(addedEmployee);
  } catch (error) {
    console.log(error);
  }
}

async function getAllEmployees(req, res) {
  try {
    console.log("************************");
    const employees = await employeeModel.findAll();
    res.status(200).json(employees);
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  createEmployee,
  getAllEmployees,
};
