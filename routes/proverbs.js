const express = require("express");
const router = express.Router();

const proverbsController = require("../controllers/proverbs");

/**
 * @swagger
 * /proverbs:
 *   get:
 *     summary: Retrieve all Nigerian proverbs
 *     responses:
 *       200:
 *         description: Successfully retrieved proverbs
 */
router.get("/", proverbsController.getAllProverbs);

/**
 * @swagger
 * /proverbs/{id}:
 *   get:
 *     summary: Retrieve a proverb by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved proverb
 */
router.get("/:id", proverbsController.getSingleProverb);

/**
 * @swagger
 * /proverbs:
 *   post:
 *     summary: Create a new proverb
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Proverb'
 *     responses:
 *       201:
 *         description: Proverb created successfully
 */
router.post("/", proverbsController.createProverb);

/**
 * @swagger
 * /proverbs/{id}:
 *   put:
 *     summary: Update a proverb
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Proverb'
 *     responses:
 *       200:
 *         description: Proverb updated successfully
 */
router.put("/:id", proverbsController.updateProverb);

/**
 * @swagger
 * /proverbs/{id}:
 *   delete:
 *     summary: Delete a proverb
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Proverb deleted successfully
 */
router.delete("/:id", proverbsController.deleteProverb);

module.exports = router;