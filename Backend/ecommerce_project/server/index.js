// Import express library
const express = require("express");

// Import adminRoutes from your routes folder
// {} means we are importing a named export
const { adminRoutes } = require("./App/routes/admin/adminRoutes");

// Create an express application
let app = express();

// Load environment variables from .env file
// Example: PORT=8000
require("dotenv").config();

// Middleware to parse JSON data from request body
// Without this, req.body will be undefined
app.use(express.json());


// Mount adminRoutes under "/admin" path
// Means every route inside adminRoutes will start with /admin
// Example:
// If inside adminRoutes you have:
// router.get("/login")
// Then full URL becomes:
// http://localhost:8000/admin/login
app.use("/admin", adminRoutes);


// Start the server
// process.env.PORT comes from .env file
// Example .env file:
// PORT=8000
app.listen(process.env.PORT, () => {
    console.log("Server started on port", process.env.PORT);
});

// Now your base URL:
// http://localhost:8000