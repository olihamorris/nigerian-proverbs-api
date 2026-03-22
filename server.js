const express = require("express");
const mongodb = require("./db/connect");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const session = require("express-session");
const passport = require("passport");
require("./config/passport");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

/* Middleware */
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // ✅ important for Render
  })
);

app.use(passport.initialize());
app.use(passport.session());

/* Swagger */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/* Routes */
const proverbsRoutes = require("./routes/proverbs");
const tribesRoutes = require("./routes/tribes");

app.use("/proverbs", proverbsRoutes);
app.use("/tribes", tribesRoutes);

/* OAuth Routes */
app.get("/auth/google", (req, res, next) => {
  console.log("Auth route hit"); // ✅ DEBUG
  next();
}, passport.authenticate("google", { scope: ["profile"] }));

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    console.log("Login successful:", req.user); // ✅ DEBUG
    res.redirect("/api-docs");
  }
);

/* Logout */
app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

/* Test route (VERY IMPORTANT) */
app.get("/test-auth", (req, res) => {
  res.send("Auth route working");
});

/* Home */
app.get("/", (req, res) => {
  res.send("Welcome to Nigerian Proverbs API");
});

/* DB */
mongodb.initDb((err) => {
  if (err) {
    console.log("DB ERROR:", err);
  } else {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
});