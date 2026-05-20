const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { string, required } = require("joi");


const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    filename: {
      type: String,
      default: "listingimage",
    },
    url: {
      type: String,
      default: "https://default-image-url.com/default.jpg",
      
    },
  },
  price: {
    type: Number,
  },
  location: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  reviews:[
    {
      type:Schema.Types.ObjectId,
      ref:"Review",
    },
  ],
  owner:{
    type:Schema.Types.ObjectId,
    ref:"User",
  },
  geometry:{
    type:{
      type:String,
      enum: ['Point'],
      required:true
    },
    coordinates: {
      type:[Number],
      required: true
    }
  },
  category:{
    type:String,
    enum:["Trending",
    "Rooms",
    "Iconic Cities",
    "Mountains",
    "Castles",
    "Amazing Pools",
    "Camping",
    "Farms",
    "Arctic",
    "Domes",
    "Boats"],

    required:true,
    
  }

});

listingSchema.post("findOneAndDelete", async function (deletedListing) {
  if (deletedListing) {
    await Review.deleteMany({
      _id: { $in: deletedListing.reviews }
    });
  }
});




const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
