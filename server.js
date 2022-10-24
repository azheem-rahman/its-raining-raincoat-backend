require("dotenv").config();
const express = require("express");
const connectDB = require("./db/db");
const cors = require("cors");
const app = express();

// --- middleware --- //
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectDB();

const WorkerProfiles = require("./models/WorkerProfiles");
const workerProfileRouter = require("./routes/workerProfileRouter");

const ItemRequest = require("./models/WorkerRequest");
const itemRequest = require("./routes/itemRequest");

const DonateItems = require("./models/DonateItems");
const donateItems = require("./routes/donateItems");

const users = require("./routes/userRouter");

app.use("/profile", workerProfileRouter);
app.use("/item_request", itemRequest);
app.use("/donate", donateItems);
app.use("/user", users);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
