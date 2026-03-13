const express = require("express");
const router = express.Router();
const proverbsController = require("../controllers/proverbs");

/**
 * @swagger
 * tags:
 *   name: Proverbs
 *   description: Nigerian Proverbs API
 */

/**
 * @swagger
 * /proverbs:
 *   get:
 *     summary: Retrieve all Nigerian proverbs
 *     tags: [Proverbs]
 *     responses:
 *       200:
 *         description: A list of proverbs
 */
router.get("/", proverbsController.getAll);

/**
 * @swagger
 * /proverbs/{id}:
 *   get:
 *     summary: Retrieve a single proverb by ID
 *     tags: [Proverbs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the proverb
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single proverb
 */
router.get("/:id", proverbsController.getSingle);

/**
 * @swagger
 * /proverbs:
 *   post:
 *     summary: Create a new proverb
 *     tags: [Proverbs]
 *     requestBody:
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
 *               provider:
 *                 type: string
 *               date:
 *                 type: string
 *               language:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       201:
 *         description: Proverb successfully created
 *       400:
 *         description: Invalid input
 */
router.post("/", proverbsController.createProverb);

/**
 * @swagger
 * /proverbs/{id}:
 *   put:
 *     summary: Update a proverb
 *     tags: [Proverbs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Proverb ID
 *         schema:
 *           type: string
 *     requestBody:
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
 *               provider:
 *                 type: string
 *               date:
 *                 type: string
 *               language:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Proverb updated
 *       400:
 *         description: Invalid input
 */
router.put("/:id", proverbsController.updateProverb);

/**
 * @swagger
 * /proverbs/{id}:
 *   delete:
 *     summary: Delete a proverb
 *     tags: [Proverbs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Proverb ID
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Proverb deleted
 */
router.delete("/:id", proverbsController.deleteProverb);

module.exports = router;