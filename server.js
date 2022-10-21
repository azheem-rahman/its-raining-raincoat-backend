require("dotenv").config();
const express = require("express");
const connectDB = require("./db/db");
const cors = require("cors");

const CreateWorkerAccount = require("./models/CreateWorkerAccount");
const workerAccount = require("./routes/workeraccount");

const ItemRequest = require("./models/WorkerRequest");
const itemRequest = require("./routes/itemRequest");
const app = express();

// --- middleware --- //
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectDB();

app.use("/worker_account", workerAccount);
app.use("/item_request", itemRequest);
app.listen(5001);
