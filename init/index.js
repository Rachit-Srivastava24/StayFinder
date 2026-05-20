const mongoose = require("mongoose");
const Listing = require("../Models/listing.js");
const initData = require("./data.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj)=>({...obj,owner:"697af3e2c3cba8e94e01cfe4"}));
  await Listing.insertMany(initData.data); 
  console.log("Sample data inserted successfully!");
};

initDB();
