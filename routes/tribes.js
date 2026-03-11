
const express = require("express");
const router = express.Router();

const tribesController = require("../controllers/tribes");

/**
 * @swagger
 * /tribes:
 *   get:
 *     summary: Get all tribes
 *     responses:
 *       200:
 *         description: Returns all tribes
 */
router.get("/", tribesController.getAllTribes);

/**
 * @swagger
 * /tribes/{id}:
 *   get:
 *     summary: Get a single tribe
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns one tribe
 */
router.get("/:id", tribesController.getSingleTribe);

/**
 * @swagger
 * /tribes:
 *   post:
 *     summary: Create a tribe
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tribe created
 */
router.post("/", tribesController.createTribe);

module.exports = router;

