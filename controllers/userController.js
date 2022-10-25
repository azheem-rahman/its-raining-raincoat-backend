const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

const Users = require("../models/Users");

// ===================== read ====================== //;
const login = async (req, res) => {
  try {
    const found = await Users.findOne({
      username: req.body.username.toLowerCase(),
    });

    if (found) {
      if (found.password === req.body.password) {
        // create payload
        const payload = {
          id: found.account_id,
          persona: found.user_type,
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
          id: found.account_id,
          persona: found.user_type,
          accessToken,
          refreshToken,
        };

        res.json(response);

        // res.json({
        //   status: "ok",
        //   message: "login successful",
        //   id: found.account_id,
        //   persona: found.user_type,
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

      await Users.create(
        {
          account_id: newId,
          username: req.body.username.toLowerCase(),
          password: req.body.password,
          user_type: req.body.user_type,
        },
        (err, data) => {
          console.log("user created", data);
          res.json({ status: "ok", message: "user created", id: newId });
        }
      );
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

// ===================== logout ====================== //;
const logout = async (req, res) => {
  try {
    // delete client localStorage -- replace with null
    res.json(() => {
      message: "logout successful";
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("persona");
      localStorage.removeItem("id");
    });

    // // to store refresh token from login response to localstorage
    // localStorage.setItem("refreshToken", res.refreshToken);

    // // to store persona from login response to localstorage
    // localStorage.setItem("persona", res.persona);

    // // to store userId from login response to localstorage
    // localStorage.setItem("id", res.id);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ status: "error", message: "failed to logout" });
  }
};

module.exports = {
  login,
  create,
  logout,
};
