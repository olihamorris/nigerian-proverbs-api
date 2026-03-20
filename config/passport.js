const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

require("dotenv").config();

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "https://nigerian-proverbs-api.onrender.com/auth/google/callback"
},
(accessToken, refreshToken, profile, done) => {
  // You can store user in DB later if needed
  return done(null, profile);
}));

// Save user session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Retrieve user session
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports = passport;