import Review from "../models/review.js";

export async function getReviewsClient(request, response) {
  try {
    const limit = parseInt(request.query.limit) || 10;
    const reviews = await Review.find().limit(limit);
    response.render("reviews", { reviews });
  } catch (err) {
    console.error(err);
    response
      .status(500)
      .json({ message: "Sorry, error fetching reviews", err });
  }
}
