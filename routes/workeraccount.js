const express = require("express");
const { Router } = require("express");
const router = express.Router();
const {
  getAllWorkers,
  createWorker,
  updateOneWorker,
  deleteOneWorker,
} = require("../controllers/workeraccount");

const CreateWorkerAccount = require("../models/CreateWorkerAccount");

// ================== read ===================== //
router.get("/get-all-worker-account", getAllWorkers);
router.post("/worker-account", createWorker);
router.patch("/worker-account/:id", updateOneWorker);
router.delete("/worker-account/:id", deleteOneWorker);
module.exports = router;
