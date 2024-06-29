const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const { jwtAuthMiddleware } = require("./jwt");

// // Middleware Function
// const logRequest = (req, res, next) => {
//     console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
//     next(); // Move on to the next phase
// }
// app.use(logRequest);

// Import the router files
const userRoutes = require("./routes/userRoutes");
const candidateRoutes = require("./routes/candidateRoutes");

// Use the routers
app.use("/user", userRoutes);
app.use("/candidate", candidateRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
