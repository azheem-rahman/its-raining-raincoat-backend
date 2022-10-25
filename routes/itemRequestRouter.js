const express = require("express");
const router = express.Router();
const {
  getSingleAccountRequest,
  createItemRequest,
  updateItemRequest,
  deleteItemRequest,
} = require("../controllers/itemRequestController");

// =================== CRUD ==========================//
router.get("/:account_id", getSingleAccountRequest);
router.put("/create", createItemRequest);
router.patch("/:id", updateItemRequest);
router.delete("/:id", deleteItemRequest);

module.exports = router;
