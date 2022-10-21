// const db = require("../db");
// const WorkerSeed = require("../models/plant");

// // Connect to the database
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

// const main = async () => {
//   const workers = [
//     {
//       full_name: "Abdul Rahman bin Salleh",
//       nationality: "bangladesh",
//       resident_status: "Work Permit",
//       address: "37 woodlands road",
//       address_unitnumber: "02-01",
//       address_postcode: 489222,
//       address_dormitory: "woodlands starlight dorm",
//       contact_number: 99872222,
//       tshirt_size: "L",
//       shoe_size: 40,
//       diet: "Vegetarian",
//     },
//     {
//       full_name: "Rahaman Bin Loukash",
//       nationality: "bangladesh",
//       resident_status: "Work Permit",
//       address: "40 ubi road",
//       address_unitnumber: "02-01",
//       address_postcode: 470012,
//       address_dormitory: "ubi dorm",
//       contact_number: 97732222,
//       tshirt_size: "M",
//       shoe_size: 38,
//       diet: "Vegetarian",
//     },
//     {
//       full_name: "Wen Bin",
//       nationality: "china",
//       resident_status: "Work Permit",
//       address: "38 bukit batok road",
//       address_postcode: 650011,
//       contact_number: 92219021,
//       tshirt_size: "M",
//       shoe_size: 38,
//       diet: "None",
//     },
//   ];

//   await WorkerSeed.insertMany(workers);
//   console.log("Created some workers!");
// };
// const run = async () => {
//   await main();
//   db.close();
// };

// run();
