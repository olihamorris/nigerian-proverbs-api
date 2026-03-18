const express = require("express");
const router = express.Router();

const controller = require("../controllers/tribes");
const ensureAuth = require("../middleware/auth");

router.get("/", controller.getAll);
router.get("/:id", controller.getSingle);

// PROTECTED
router.post("/", ensureAuth, controller.createTribe);
router.put("/:id", ensureAuth, controller.updateTribe);
router.delete("/:id", ensureAuth, controller.deleteTribe);

module.exports = router;