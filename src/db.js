import "dotenv/config";
import { connect } from "mongoose";

export default async function connectToDatabase() {
  try {
    await connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}
