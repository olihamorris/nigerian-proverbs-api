const express = require("express");
const router = express.Router();

const proverbsController = require("../controllers/proverbs");

/**
 * @swagger
 * /proverbs:
 *   get:
 *     summary: Retrieve all Nigerian proverbs
 *     description: Returns a list of all proverbs stored in the database
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
 *         description: The proverb ID
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
 *     description: Adds a proverb to the database
 *     responses:
 *       201:
 *         description: Proverb created successfully
 *       400:
 *         description: Invalid input
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
 *         description: ID of the proverb to update
 *         schema:
 *           type: string
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
 *         description: ID of the proverb to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Proverb deleted successfully
 */
router.delete("/:id", proverbsController.deleteProverb);

module.exports = router;