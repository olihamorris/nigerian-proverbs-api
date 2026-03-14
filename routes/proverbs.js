const express = require("express");
const router = express.Router();

const proverbsController = require("../controllers/proverbs");

/* GET all proverbs */
router.get("/", proverbsController.getAll);

/* GET single proverb */
router.get("/:id", proverbsController.getSingle);

/* CREATE proverb */
router.post("/", proverbsController.createProverb);

/* UPDATE proverb */
router.put("/:id", proverbsController.updateProverb);

/* DELETE proverb */
router.delete("/:id", proverbsController.deleteProverb);

module.exports = router;