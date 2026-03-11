const express = require("express");
const router = express.Router();

const proverbsController = require("../controllers/proverbs");

/**
 * @swagger
 * /proverbs:
 *   get:
 *     summary: Get all Nigerian proverbs
 *     responses:
 *       200:
 *         description: Returns a list of proverbs
 */
router.get("/", proverbsController.getAllProverbs);

/**
 * @swagger
 * /proverbs/{id}:
 *   get:
 *     summary: Get a proverb by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single proverb
 */
router.get("/:id", proverbsController.getSingleProverb);

/**
 * @swagger
 * /proverbs:
 *   post:
 *     summary: Create a new proverb
 *     requestBody:
 *       description: Proverb object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               proverb:
 *                 type: string
 *               meaning:
 *                 type: string
 *               tribe:
 *                 type: string
 *     responses:
 *       201:
 *         description: Proverb created
 */
router.post("/", proverbsController.createProverb);

module.exports = router;