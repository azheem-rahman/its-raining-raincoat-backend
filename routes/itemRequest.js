const express = require("express");
const { Router } = require("express");
const router = express.Router();
const {
  getSingleAccountRequest,
  createItemRequest,
  updateItemRequest,
  deleteItemRequest,
} = require("../controllers/itemRequest");

const ItemRequest = require("../models/WorkerRequest");

// =================== CRUD ==========================//
router.get("/:account_id", getSingleAccountRequest);
router.post("/create", createItemRequest);
router.patch("/:id", updateItemRequest);
router.delete("/:id", deleteItemRequest);

module.exports = router;
