"use strict";

const { eventModel } = require("../DatabaseModels/index");

async function addEvent(req, res) {
  try {
    console.log("-------------------------------------------------------");
    const eventDescription = req.body;
    const addedEvent = await eventModel.create(eventDescription);
    console.log({ addedEvent });
    res.status(201).json(addedEvent);
  } catch (error) {
    console.log(error);
  }
}

async function getAllEvents(req, res) {
  try {
    const events = await eventModel.findAll();
    res.status(201).json(events);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  addEvent,
  getAllEvents,
};
