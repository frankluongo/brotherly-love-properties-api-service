import express from "express";

import { getReviewsClient } from "../controllers/clientReviewsController.js";

const router = express.Router();

router.get("/", getReviewsClient);

export default router;
