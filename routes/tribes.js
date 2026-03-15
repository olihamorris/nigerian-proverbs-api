const express = require("express");
const router = express.Router();

const tribesController = require("../controllers/tribes");

// GET all tribes
router.get("/", tribesController.getAll);

// GET a single tribe
router.get("/:id", tribesController.getSingle);

// POST create a tribe
router.post("/", tribesController.createTribe);

// PUT update a tribe
router.put("/:id", tribesController.updateTribe);

// DELETE a tribe
router.delete("/:id", tribesController.deleteTribe);

module.exports = router;