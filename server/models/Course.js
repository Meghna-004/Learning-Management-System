import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  thumbnail: String,
  instructorId: String
}, { timestamps: true });

export default mongoose.model("Course", courseSchema);