const express = require("express");
const connectDB = require("./db/db");

const CreateWorkerAccount = require("./models/CreateWorkerAccount");
const workerAccount = require("./routes/workeraccount");

const ItemRequest = require("./models/WorkerRequest");
const itemRequest = require("./routes/itemRequest");
const app = express();

// --- middleware --- //

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectDB();

app.use("/workerAccount", workerAccount);
app.use("/itemRequest", itemRequest);
app.listen(5001);
