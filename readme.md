# Afghan Proverbs API

This RESTful API serves traditional Afghan proverbs and sayings in Dari, Pashto, and English.

# Technologies Used

- Node.js
- Express.js
- JSON file for storage
- Postman (for testing)



## How to Run

1. Clone the repository:


git clone https://github.com/rhmbasir/afghan-proverbs-api.git
cd afghan-proverbs-api
npm install (install dependencies)
npm start (Start the server)

2. Access the API at: http://localhost:3000/proverbs



# API Endpoints


Get All Proverbs

    - GET /proverbs

Filter by Category

    - GET /proverbs?category=wisdom

Search by Keyword

    - GET /proverbs?search=water

Get Random Proverb

    - GET /proverbs/random

Get By ID

    - GET /proverbs/id

Add New Proverb

    - POST /proverbs
    - Body: Content-Type: application/json



