const express = require("express");
const router = express.Router();

const controller = require("../controllers/proverbs");

router.get("/", (req, res) => controller.getAll(req, res));

router.get("/:id", (req, res) => controller.getSingle(req, res));

router.post("/", (req, res) => controller.createProverb(req, res));

router.put("/:id", (req, res) => controller.updateProverb(req, res));

router.delete("/:id", (req, res) => controller.deleteProverb(req, res));

module.exports = router;