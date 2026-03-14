const express = require("express");
const mongodb = require("./db/connect");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

/* Swagger documentation */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/* Routes */
app.use("/proverbs", require("./routes/proverbs"));
app.use("/tribes", require("./routes/tribes"));

/* Home route */
app.get("/", (req, res) => {
  res.send("Nigerian Proverbs API is running");
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