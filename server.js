require("dotenv").config();

const express = require("express");
const app = express();

const mongodb = require("./db/connect");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger");

const proverbsRoutes = require("./routes/proverbs");
const tribesRoutes = require("./routes/tribes");

const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/proverbs", proverbsRoutes);
app.use("/tribes", tribesRoutes);

// Database connection
mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
});