const express = require("express");
const { Router } = require("express");
const router = express.Router();
const {
  getOneItemRequest,
  createItemRequest,
  updateItemRequest,
  deleteItemRequest,
} = require("../controllers/itemRequest");

const ItemRequest = require("../models/WorkerRequest");

// =================== CRUD ==========================//
router.get("/item-request/:account_id", getOneItemRequest);
router.post("/item-request", createItemRequest);
router.patch("/item-request/:id", updateItemRequest);
router.delete("/item-request/:id", deleteItemRequest);

module.exports = router;
