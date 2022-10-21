const donateItems = require("../models/DonateItems");

// ===================== read ====================== //;
const getOneDonationItem = async (req, res) => {
  const request = await donateItems.findOne({ id });
  res.json(request);
};

// ===================== create ====================== //;
const createDonationItem = async (req, res) => {
  const createDonation = new donateItems({
    account_id: req.body.account_id,
    area_select: req.body.area_select,
    dropoff: req.body.dropoff,
    donate_quantity: req.body.donate_quantity,
    item_condition: req.body.item_condition,
    item_photo: req.body.item_photo,
    item_comment: req.body.item_comment,
    status: req.body.status,
  });
  await createDonation.save();
  res.json({ status: "ok", message: "donation successful" });
};

// ===================== update ====================== //;
const updateDonation = async (req, res) => {
  const update = new donateItems({
    area_select: req.body.area_select,
    dropoff: req.body.dropoff,
    donate_quantity: req.body.donate_quantity,
    item_condition: req.body.item_condition,
    item_photo: req.body.item_photo,
    item_comment: req.body.item_comment,
    status: req.body.status,
  });
  res.json({ status: "ok", message: "donation amended" });
};

// ===================== delete ====================== //;
const deleteDonation = async (req, res) => {
  const { id } = req.body;
  await donateItems.deleteOne({ id });
  res.json({ status: "ok", message: "donation item deleted" });
};

module.exports = {
  getOneDonationItem,
  createDonationItem,
  updateDonation,
  deleteDonation,
};
