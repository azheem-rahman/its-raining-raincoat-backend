const mongoose = require("mongoose");
const UserLoginSchema = new mongoose.Schema({
  // * enabling account_id after figuring out continuing integer in mongoDB */
  // account_id: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  user_type: { type: String, enum: ["Donor", "Worker", "Volunteer"] },
});

const UserLogin = mongoose.model("UserLogin", UserLoginSchema);
module.exports = UserLogin;
