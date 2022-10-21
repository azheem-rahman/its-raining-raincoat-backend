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

// ================== CRUD ===================== //
router.get("/all", getAllWorkers);
router.post("/create", createWorker);
router.patch("/:id", updateOneWorker);
router.delete("/:id", deleteOneWorker);
module.exports = router;
