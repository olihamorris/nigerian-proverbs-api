const express = require("express");
const mongodb = require("./db/connect");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const session = require("express-session");
const passport = require("passport");
require("./config/passport"); // important

const app = express();
const port = process.env.PORT || 8080;

/* Middleware */
app.use(express.json());

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

/* Swagger */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/", (req, res) => {
  res.send("Welcome to Nigerian Proverbs API");
});


/* Routes */
const proverbsRoutes = require("./routes/proverbs");
const tribesRoutes = require("./routes/tribes");

app.use("/proverbs", proverbsRoutes);
app.use("/tribes", tribesRoutes);

/* OAuth Routes */
app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/api-docs");
  }
);

app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

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