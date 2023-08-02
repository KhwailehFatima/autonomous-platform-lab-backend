"use strict";

const express = require("express");
const router = express.Router();

const { signup, signin, allUser } = require("../controllers/user.controller");
const { checkDuplicate } = require("../middlewares/checkDuplicate");

router.post("/signup", checkDuplicate, signup);
router.get("/signup", allUser);
router.post("/signin", signin);

module.exports = router;
