import express from "express";
import cors from "cors";

import "dotenv/config";
import { Customer } from "./src/models/customer.js";
import connectDB from "./src/config/db.js";

const app = express();

// Parsing JSON to Standard JS Object
app.use(express.json());

app.use(cors());

// ------ Connecting Database ----
connectDB();

// All API Routes
app.get("/customers", async (req, res) => {
  const customers = await Customer.find();
  res.json({
    customers,
  });
});

app.post("/customers", async (req, res) => {
  // console.log(req.body);

  // Reading Request Body Data
  const { name, mobileNo, address } = req.body;

  // Creating a customer
  const newCustomer = new Customer({ name, mobileNo, address });

  // Saving customer details into Database
  const savedCustomer = await newCustomer.save();

  res.json({ msg: "customer created successfully", customer: savedCustomer });
});

const port = process.env.PORT || 5000;
const hostname = "127.0.0.1";

app.listen(port, hostname, () => {
  console.log("Server is running on port 5000");
});
