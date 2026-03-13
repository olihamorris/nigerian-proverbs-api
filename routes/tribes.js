const express = require("express");
const router = express.Router();
const tribesController = require("../controllers/tribes");

/**
 * @swagger
 * tags:
 *   name: Tribes
 *   description: Nigerian Tribes API
 */

/**
 * @swagger
 * /tribes:
 *   get:
 *     summary: Retrieve all Nigerian tribes
 *     tags: [Tribes]
 *     responses:
 *       200:
 *         description: A list of tribes
 */
router.get("/", tribesController.getAll);

/**
 * @swagger
 * /tribes/{id}:
 *   get:
 *     summary: Retrieve a single tribe by ID
 *     tags: [Tribes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Tribe ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single tribe
 */
router.get("/:id", tribesController.getSingle);

/**
 * @swagger
 * /tribes:
 *   post:
 *     summary: Create a new tribe
 *     tags: [Tribes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tribe:
 *                 type: string
 *               region:
 *                 type: string
 *               language:
 *                 type: string
 *               population:
 *                 type: string
 *               famousProverb:
 *                 type: string
 *               provider:
 *                 type: string
 *               date:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tribe successfully created
 *       400:
 *         description: Invalid input
 */
router.post("/", tribesController.createTribe);

/**
 * @swagger
 * /tribes/{id}:
 *   put:
 *     summary: Update a tribe
 *     tags: [Tribes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Tribe ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tribe:
 *                 type: string
 *               region:
 *                 type: string
 *               language:
 *                 type: string
 *               population:
 *                 type: string
 *               famousProverb:
 *                 type: string
 *               provider:
 *                 type: string
 *               date:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tribe updated
 *       400:
 *         description: Invalid input
 */
router.put("/:id", tribesController.updateTribe);

/**
 * @swagger
 * /tribes/{id}:
 *   delete:
 *     summary: Delete a tribe
 *     tags: [Tribes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Tribe ID
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Tribe deleted
 */
router.delete("/:id", tribesController.deleteTribe);

module.exports = router;