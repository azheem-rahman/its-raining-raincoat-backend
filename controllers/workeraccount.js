const CreateWorkerAccount = require("../models/CreateWorkerAccount");

// ================ read =================== //
const getAllWorkers = async (req, res) => {
  const allWorkers = await CreateWorkerAccount.find();
  res.json(allWorkers);
};

// const getOneWorker = async (req, res) => {
//   const oneWorker = await CreateWorkerAccount.findOne();
//   res.json(oneWorker);
// };

// ================ create =================== //
const createWorker = async (req, res) => {
  const createdWorker = new CreateWorkerAccount({
    account_id: req.body.account_id,
    name_salutation: req.body.salution,
    full_name: req.body.full_name,
    nationality: req.body.nationality,
    resident_status: req.body.resident_status,
    address: req.body.address,
    address_unitnumber: req.body.address_unitnumber,
    address_postcode: req.body.address_postcode,
    address_dormitory: req.body.address_dormitory,
    contact_number: req.body.contact_number,
    tshirt_size: req.body.tshirt_size,
    shoe_size: req.body.shoe_size,
    diet: req.body.diet,
  });
  await createdWorker.save();
  res.json({ status: "ok", message: "worker account created" });
};

// ================ update =================== //
const updateOneWorker = async (req, res) => {
  const response = await CreateWorkerAccount.findByIdAndUpdate(req.params.id, {
    name_salutation: req.body.salution,
    full_name: req.body.full_name,
    nationality: req.body.nationality,
    resident_status: req.body.resident_status,
    address: req.body.address,
    address_unitnumber: req.body.address_unitnumber,
    address_postcode: req.body.address_postcode,
    address_dormitory: req.body.address_dormitory,
    contact_number: req.body.contact_number,
    tshirt_size: req.body.tshirt_size,
    shoe_size: req.body.shoe_size,
    diet: req.body.diet,
  });
  res.json({ status: "ok", message: "worker updated" });
};
// ================ delete =================== //
const deleteOneWorker = async (req, res) => {
  const { id } = req.body;
  await CreateWorkerAccount.deleteOne({ id });
  res.json({ status: "ok", message: "worker deleted" });
};

module.exports = {
  getAllWorkers,
  createWorker,
  updateOneWorker,
  deleteOneWorker,
};
