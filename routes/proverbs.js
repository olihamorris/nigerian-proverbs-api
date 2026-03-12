
const express = require("express");
const router = express.Router();

const proverbsController = require("../controllers/proverbs");

router.get("/", proverbsController.getAllProverbs);
router.get("/:id", proverbsController.getSingleProverb);
router.post("/", proverbsController.createProverb);
router.put("/:id", proverbsController.updateProverb);
router.delete("/:id", proverbsController.deleteProverb);

module.exports = router;
