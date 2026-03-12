
const express = require("express");
const router = express.Router();

const tribesController = require("../controllers/tribes");

router.get("/", tribesController.getAllTribes);
router.get("/:id", tribesController.getSingleTribe);
router.post("/", tribesController.createTribe);
router.put("/:id", tribesController.updateTribe);
router.delete("/:id", tribesController.deleteTribe);

module.exports = router;

