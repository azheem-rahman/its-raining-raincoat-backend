const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Users = require("../models/Users");

// ===================== read ====================== //;
const login = async (req, res) => {
  try {
    const user = await Users.findOne({
      username: req.body.username.toLowerCase(),
    });

    const result = await bcrypt.compare(req.body.password, user.password);

    if (user) {
      // added in to compare bcrypt password instead
      if (result) {
        // if (user.password === req.body.password) {

        // create payload
        const payload = {
          id: user.account_id,
          persona: user.user_type,
        };

        // create access token
        const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, {
          expiresIn: "20m",
          jwtid: uuidv4(),
        });

        // create refresh token
        const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, {
          expiresIn: "30d",
          jwtid: uuidv4(),
        });

        const response = {
          status: "ok",
          message: "login successful",
          id: user.account_id,
          persona: user.user_type,
          accessToken,
          refreshToken,
        };

        res.json(response);

        // res.json({
        //   status: "ok",
        //   message: "login successful",
        //   id: user.account_id,
        //   persona: user.user_type,
        // });
      } else {
        res.json({ status: "error", message: "invalid username or password" });
      }
    } else {
      res.json({ status: "error", message: "invalid username or password" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ status: "error", message: "failed to login" });
  }
};

// ===================== create ====================== //;

const create = async (req, res) => {
  console.log(req.body);
  try {
    const found = await Users.findOne({
      username: req.body.username.toLowerCase(),
    });

    if (found === null) {
      const newId = uuidv4();

      // add in bcrypt to password when creating account
      const password = await bcrypt.hash(req.body.password, 12);

      await Users.create({
        account_id: newId,
        username: req.body.username.toLowerCase(),
        password: password,
        user_type: req.body.user_type,
      });

      console.log("user created", data);
      res.json({ status: "ok", message: "user created", id: newId });
    } else {
      res.json({ status: "error", message: "username taken" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ status: "error", message: "failed to create user" });
  }
};
// ===================== update ====================== //;
// ===================== delete ====================== //;

module.exports = {
  login,
  create,
};
