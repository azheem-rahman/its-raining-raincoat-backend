const express = require("express");
const connectDB = require("./db/db");
const CreateWorkerAccount = require("./models/CreateWorkerAccount");
const workerAccount = require("./routes/workeraccount");
const app = express();

// --- middleware --- //
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectDB();

app.use("/", workerAccount);
app.listen(5001);
