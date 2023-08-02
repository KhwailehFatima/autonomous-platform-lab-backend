const {
  addProject,
  getAllProjects,
} = require("../controllers/project.controller");

const express = require("express");
const router = express.Router();

router.post("/project", addProject);
router.get("/projects", getAllProjects);

module.exports = router;
