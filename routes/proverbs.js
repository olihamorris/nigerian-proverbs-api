const express = require("express");
const router = express.Router();

const controller = require("../controllers/proverbs");
const ensureAuth = require("../middleware/auth");

router.get("/", controller.getAll);
router.get("/:id", controller.getSingle);

// PROTECTED
router.post("/", ensureAuth, controller.createProverb);
router.put("/:id", ensureAuth, controller.updateProverb);
router.delete("/:id", ensureAuth, controller.deleteProverb);

module.exports = router;