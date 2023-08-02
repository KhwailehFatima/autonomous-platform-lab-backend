"use strict";

const bcrypt = require("bcrypt");
const base64 = require("base-64");

const { userModel } = require("../DatabaseModels/index");

async function signup(req, res) {
  try {
    const { username, fullname, email, password,role } = req.body;

    console.log({ username });
    const userInfo = {
      username,
      fullname,
      email,
      password: await bcrypt.hash(password, 10),
      role
    };

    const user = await userModel.create(userInfo);
    console.log({ user });
    if (user) {
      res.status(200).json({
        user: {
          id: user.id,
          username: user.username,
          fullname: user.fullname,
          email: user.email,
          password: user.password,
          role
        },
        token: user.token,
      });
    } else {
      res.status(500).send("Error: Creating User Failed");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error: Creating User Failed");
  }
}

const allUser = async (req, res) => {
    const users = await userModel.findAll();
    res.status(200).json(users)
};

async function signin(req, res) {
  try {
    const basicAuth = req.headers.authorization.split(" ").pop();
    const [username, password] = base64.decode(basicAuth).split(":");

    const user = await userModel.findOne({
      where: { username },
    });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
    //   await userModel.update(user.id, {
    //     ...user,
    //   });
      return res.status(200).json({
        user: {
          id: user.id,
          username: user.username,
          fullname: user.fullname,
          email: user.email,
          password: user.password,
        },
      });
    }
    // return res.status(401).send("You are not authorized");
  } catch (error) {
    console.log(error);
    return res.status(401).send("You are not authorized");
  }
}

module.exports = {
  signup,
  allUser,
  signin,
};
