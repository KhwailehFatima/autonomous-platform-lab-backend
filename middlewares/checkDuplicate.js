"use strict";
const { userModel } = require("../DatabaseModels/index");

const checkDuplicate = async (req, res, next) => {
  try {
    const username = await userModel.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (username) {
      return res.status(409).send("Username Already Taken");
    }
    const email = await userModel.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (email) {
      return res.status(409).send("Email Already Taken");
    }
    next();
  } catch (e) {
    console.log(e);
  }
};
module.exports = {
  checkDuplicate,
};
