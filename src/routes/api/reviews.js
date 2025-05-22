import express from "express";

import {
  deleteReview,
  getReviews,
  postReview,
  postReviews,
} from "../../controllers/apiReviewsController.js";

const router = express.Router();

router.delete("/review/:id", deleteReview);
router.post("/review", postReview);
router.get("/reviews", getReviews);
router.post("/reviews", postReviews);

export default router;
