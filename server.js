require("dotenv").config();

const express = require("express");
const mongodb = require("./db/connect");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Swagger Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/api/proverbs", require("./routes/proverbs"));
app.use("/api/tribes", require("./routes/tribes"));

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the Nigerian Proverbs API");
});

// Connect to MongoDB and start server
mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
});