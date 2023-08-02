"use strict";

require("dotenv");

const { Sequelize, DataTypes } = require("sequelize");
const employee = require("./employee.model");
const project = require("./project.model");
const event = require("./event.model");
const user = require("./user.model");

const DATABASE_URL = process.env.DATABASE_URL;

const sequelizeOption = {
  //   dialectOptions: {
  //     ssl: {
  //       require: true,
  //       rejectUnauthorized: false,
  //     },
  //   },
};

const sequelize = new Sequelize(DATABASE_URL, sequelizeOption);

const employeeModel = employee(sequelize, DataTypes);
const projectModel = project(sequelize, DataTypes);
const eventModel = event(sequelize, DataTypes);
const userModel = user(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  employeeModel,
  projectModel,
  eventModel,
  userModel,
};
