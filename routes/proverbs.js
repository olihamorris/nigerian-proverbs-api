const express = require("express");
const router = express.Router();

const proverbsController = require("../controllers/proverbs");

router.get("/", proverbsController.getAll);

router.get("/:id", proverbsController.getSingle);

router.post("/", proverbsController.createProverb);

router.put("/:id", proverbsController.updateProverb);

router.delete("/:id", proverbsController.deleteProverb);

module.exports = router;