# Google Reviews API

This project is a simple API for storing and managing Google reviews for businesses. It is built using JavaScript and Node.js with Express framework.

## Project Structure

```
google-reviews-api
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains the logic for handling requests
│   │   └── reviewsController.js # Controller for managing reviews
│   ├── models                # Defines the data structure
│   │   └── review.js         # Review model
│   ├── routes                # API routes
│   │   └── reviews.js        # Routes for reviews
│   └── db.js                # Database connection
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/google-reviews-api.git
   ```

2. Navigate to the project directory:
   ```
   cd google-reviews-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The API will be running on `http://localhost:3000`.

## API Endpoints

- `GET /reviews` - Retrieve all reviews
- `POST /reviews` - Add a new review
- `DELETE /reviews/:id` - Delete a review by ID

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.