import Review from "../models/review.js";

export async function deleteReview(request, response) {
  const { id } = request.params;
  try {
    const deletedReview = await Review.findByIdAndDelete(id);
    if (!deletedReview) {
      return response.status(404).json({ message: "Review not found" });
    }
    response.status(200).json({ message: "Review deleted successfully" });
  } catch (err) {
    console.error(err);
    response.status(500).json({ message: "Error deleting review", err });
  }
}

export async function getReviews(_, response) {
  try {
    const reviews = await Review.find();
    response.status(200).json(reviews);
  } catch (err) {
    console.error(err);
    response
      .status(500)
      .json({ message: "Sorry, error fetching reviews", err });
  }
}

export async function postReview(request, response) {
  const fields = request.body;
  try {
    const newReview = await Review.create(fields);
    response.status(200).json(newReview);
  } catch (err) {
    console.error(err);
    response.status(500).json({ message: "Error adding review", err });
  }
}

export async function postReviews(request, response) {
  try {
    const { reviews } = request.body;
    for (const review of reviews) {
      const { reviewer, reviewCount, localGuide, rating, comment } = review;
      await Review.create({
        reviewer,
        reviewCount,
        localGuide,
        rating,
        comment,
      });
    }
    response.status(200).json({ message: "Reviews added successfully" });
  } catch (err) {
    console.error(err);
    response.status(500).json({ message: "Error adding review", err });
  }
}

export async function scrapeReviews(request, response) {}
