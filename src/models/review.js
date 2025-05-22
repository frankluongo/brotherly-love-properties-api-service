import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
  reviewer: {
    type: String,
    required: true,
  },
  reviewCount: {
    type: Number,
    required: true,
  },
  localGuide: {
    type: Boolean,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
});

const Review = model("Review", reviewSchema);

export default Review;
