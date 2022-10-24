const { v4: uuidv4 } = require("uuid");

const Users = require("../models/Users");

// ===================== read ====================== //;
const login = async (req, res) => {
  try {
    const found = await Users.findOne({ username: req.body.username });
    console.log(found);
    if (found) {
      if (found.password === req.body.password) {
        res.json({ status: "ok", message: "login successful" });
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
  try {
    await Users.create({
      account_id: uuidv4(),
      username: req.body.username.toLowerCase(),
      password: req.body.password,
      user_type: req.body.user_type,
    });

    res.json({ status: "ok", message: "user created" });
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
