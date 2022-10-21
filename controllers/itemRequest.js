const itemRequest = require("../models/WorkerRequest");

// ===================== read ====================== //;

// * this is to find all items within one account */
const getSingleAccountRequest = async (req, res) => {
  const request = await itemRequest.findOne({ account_id });
  res.json(request);
};

// ===================== create ====================== //;
const createItemRequest = async (req, res) => {
  const createRequest = new itemRequest({
    account_id: req.body.account_id,
    item_request_category: req.body.item_request_category,
    item_request_details: req.body.item_request_details,
    item_text_request: req.body.item_text_request,
    item_photo_request: req.body.item_photo_request,
    item_delivery: req.body.item_delivery,
    delivery_address: req.body.delivery_address,
  });
  await createRequest.save();
  res.json({ status: "ok", message: "item successfully requested" });
};
// ===================== update ====================== //;
const updateItemRequest = async (req, res) => {
  const updateRequest = new itemRequest({
    item_request_category: req.body.item_request_category,
    item_request_details: req.body.item_request_details,
    item_text_request: req.body.item_text_request,
    item_photo_request: req.body.item_photo_request,
    item_delivery: req.body.item_delivery,
    delivery_address: req.body.delivery_address,
  });
  res.json({ status: "ok", message: "item updated" });
};

// ===================== delete ====================== //;
const deleteItemRequest = async (req, res) => {
  const { id } = req.body;
  await itemRequest.deleteOne({ id });
  res.json({ status: "ok", message: "one item deleted" });
};

module.exports = {
  getSingleAccountRequest,
  createItemRequest,
  updateItemRequest,
  deleteItemRequest,
};
