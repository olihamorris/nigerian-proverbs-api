const express = require("express");
const mongodb = require("./db/connect");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

/* Swagger */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/* Routes */
const proverbsRoutes = require("./routes/proverbs");

app.use("/proverbs", proverbsRoutes);

/* Home route */
app.get("/", (req, res) => {
  res.send("Nigerian Proverbs API");
});

/* Database connection */
mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
});