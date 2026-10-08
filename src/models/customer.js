import mongoose from "mongoose";

//  Defining User Schema
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  mobileNo: {
    type: Number,
    require: true,
  },

  address: String,
});

// Creating User  Model
export const Customer = mongoose.model("Customer", customerSchema);
