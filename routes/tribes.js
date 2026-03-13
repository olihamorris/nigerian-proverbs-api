const express = require("express");
const router = express.Router();

const tribesController = require("../controllers/tribes");

/**
 * @swagger
 * /api/tribes:
 *   get:
 *     summary: Retrieve all Nigerian tribes
 *     responses:
 *       200:
 *         description: Successfully retrieved tribes
 */
router.get("/", tribesController.getAllTribes);

/**
 * @swagger
 * /api/tribes/{id}:
 *   get:
 *     summary: Retrieve a tribe by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved tribe
 */
router.get("/:id", tribesController.getSingleTribe);

/**
 * @swagger
 * /api/tribes:
 *   post:
 *     summary: Create a new tribe
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tribe'
 *     responses:
 *       201:
 *         description: Tribe created successfully
 */
router.post("/", tribesController.createTribe);

/**
 * @swagger
 * /api/tribes/{id}:
 *   put:
 *     summary: Update a tribe
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
 *             $ref: '#/components/schemas/Tribe'
 *     responses:
 *       200:
 *         description: Tribe updated successfully
 */
router.put("/:id", tribesController.updateTribe);

/**
 * @swagger
 * /api/tribes/{id}:
 *   delete:
 *     summary: Delete a tribe
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Tribe deleted successfully
 */
router.delete("/:id", tribesController.deleteTribe);

module.exports = router;