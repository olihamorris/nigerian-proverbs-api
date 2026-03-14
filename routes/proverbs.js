const express = require("express");
const router = express.Router();

// Import controller
const {
  getAll,
  getSingle,
  createProverb,
  updateProverb,
  deleteProverb
} = require("../controllers/proverbs");

// GET all proverbs
router.get("/", getAll);

// GET a single proverb
router.get("/:id", getSingle);

// CREATE a proverb
router.post("/", createProverb);

// UPDATE a proverb
router.put("/:id", updateProverb);

// DELETE a proverb
router.delete("/:id", deleteProverb);

module.exports = router;