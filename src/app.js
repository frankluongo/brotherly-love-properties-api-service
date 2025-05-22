import express from "express";
import hbs from "hbs";
import bodyParser from "body-parser";

import apiReviewsRoutes from "./routes/api/reviews.js";
import clientReviewsRoutes from "./routes/reviews.js";

import connectToDatabase from "./db.js";

const __dirname = import.meta.dirname;

const app = express();
const PORT = process.env.PORT || 3000;

hbs.registerHelper("firstLetter", (text) => {
  if (text && text.length > 0) {
    return text.charAt(0).toUpperCase();
  }
  return "";
});

hbs.registerPartials(`${__dirname}/views/components/`, function (err) {});

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);
app.use(bodyParser.json());
app.use("/api", apiReviewsRoutes);
app.use("/reviews", clientReviewsRoutes);

app.use("/static", express.static(`${__dirname}/public`));

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
