import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.DATABASE_URL);
    console.log("Database Connected");
  } catch (error) {
    console.log("Database Error", error);
    process.exit(1);
  }
};

export default connectDB;
