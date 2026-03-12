const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;


// GET all tribes
const getAllTribes = async (req, res) => {
  try {
    const result = await mongodb.getDb().collection("tribes").find();
    const tribes = await result.toArray();
    res.status(200).json(tribes);
  } catch (error) {
    res.status(500).json(error);
  }
};


// GET single tribe
const getSingleTribe = async (req, res) => {
  try {
    const tribeId = new ObjectId(req.params.id);

    const tribe = await mongodb
      .getDb()
      .collection("tribes")
      .findOne({ _id: tribeId });

    res.status(200).json(tribe);
  } catch (error) {
    res.status(500).json(error);
  }
};


// CREATE tribe
const createTribe = async (req, res) => {
  try {

    if (
      !req.body.tribe ||
      !req.body.region ||
      !req.body.language ||
      !req.body.population ||
      !req.body.famousProverb ||
      !req.body.provider ||
      !req.body.date
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const tribe = {
      tribe: req.body.tribe,
      region: req.body.region,
      language: req.body.language,
      population: req.body.population,
      famousProverb: req.body.famousProverb,
      provider: req.body.provider,
      date: req.body.date
    };

    const response = await mongodb
      .getDb()
      .collection("tribes")
      .insertOne(tribe);

    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error);
    }

  } catch (error) {
    res.status(500).json(error);
  }
};


// UPDATE tribe
const updateTribe = async (req, res) => {
  try {

    if (
      !req.body.tribe ||
      !req.body.region ||
      !req.body.language ||
      !req.body.population ||
      !req.body.famousProverb ||
      !req.body.provider ||
      !req.body.date
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const tribeId = new ObjectId(req.params.id);

    const tribe = {
      tribe: req.body.tribe,
      region: req.body.region,
      language: req.body.language,
      population: req.body.population,
      famousProverb: req.body.famousProverb,
      provider: req.body.provider,
      date: req.body.date
    };

    const response = await mongodb
      .getDb()
      .collection("tribes")
      .replaceOne({ _id: tribeId }, tribe);

    if (response.modifiedCount > 0) {
      res.status(200).send();
    } else {
      res.status(500).json(response.error);
    }

  } catch (error) {
    res.status(500).json(error);
  }
};


// DELETE tribe
const deleteTribe = async (req, res) => {
  try {

    const tribeId = new ObjectId(req.params.id);

    const response = await mongodb
      .getDb()
      .collection("tribes")
      .deleteOne({ _id: tribeId });

    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error);
    }

  } catch (error) {
    res.status(500).json(error);
  }
};


module.exports = {
  getAllTribes,
  getSingleTribe,
  createTribe,
  updateTribe,
  deleteTribe
};
