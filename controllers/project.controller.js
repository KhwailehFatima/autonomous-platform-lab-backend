"use strict";

const { projectModel } = require("../DatabaseModels/index");

async function addProject(req, res) {
  try {
    const projectDescription = req.body;
    const addedProject = await projectModel.create(projectDescription);
    res.status(201).json(addedProject);
  } catch (error) {
    console.log(error);
  }
}
async function getAllProjects(req, res) {
  try {
    const allProjects = await projectModel.findAll();
    res.status(201).json(allProjects);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { addProject, getAllProjects };
