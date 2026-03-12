const express = require("express");
const router = express.Router();

const tribesController = require("../controllers/tribes");

/**
 * @swagger
 * /tribes:
 *   get:
 *     summary: Retrieve all Nigerian tribes
 *     description: Returns a list of tribes stored in the database
 *     responses:
 *       200:
 *         description: Successfully retrieved tribes
 */
router.get("/", tribesController.getAllTribes);

/**
 * @swagger
 * /tribes/{id}:
 *   get:
 *     summary: Retrieve a tribe by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The tribe ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved tribe
 */
router.get("/:id", tribesController.getSingleTribe);

/**
 * @swagger
 * /tribes:
 *   post:
 *     summary: Create a new tribe
 *     description: Adds a tribe to the database
 *     responses:
 *       201:
 *         description: Tribe created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", tribesController.createTribe);

/**
 * @swagger
 * /tribes/{id}:
 *   put:
 *     summary: Update a tribe
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the tribe to update
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tribe updated successfully
 */
router.put("/:id", tribesController.updateTribe);

/**
 * @swagger
 * /tribes/{id}:
 *   delete:
 *     summary: Delete a tribe
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the tribe to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Tribe deleted successfully
 */
router.delete("/:id", tribesController.deleteTribe);

module.exports = router;