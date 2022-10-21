const mongoose = require("mongoose");
const URI =
  "mongodb+srv://maybelline:generalAssembly@cluster0.fdn3bip.mongodb.net/?retryWrites=true&w=majority";
// const db = "mongodb://127.0.0.1:27017/itsrainingraincoat";

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("database connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
