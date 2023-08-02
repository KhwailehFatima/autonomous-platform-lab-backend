"use strict";

const express = require("express");
const router = express.Router();

const { addEvent, getAllEvents } = require("../controllers/event.controller");

router.post("/event", addEvent);
router.get("/events", getAllEvents);

module.exports = router;
