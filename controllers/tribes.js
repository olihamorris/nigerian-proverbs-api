const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection("tribes").find();
    const tribes = await result.toArray();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(tribes);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingle = async (req, res) => {
  try {
    const tribeId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection("tribes").find({ _id: tribeId });
    const tribe = await result.toArray();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(tribe[0]);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createTribe = async (req, res) => {
  try {
    const tribe = {
      name: req.body.name,
      region: req.body.region,
      language: req.body.language,
      population: req.body.population,
      culture: req.body.culture,
      provider: req.body.provider,
      date: req.body.date
    };

    const response = await mongodb.getDb().db().collection("tribes").insertOne(tribe);

    if (response.acknowledged) {
      res.status(201).send();
    } else {
      res.status(500).json(response.error || "Error creating tribe");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateTribe = async (req, res) => {
  try {
    const tribeId = new ObjectId(req.params.id);

    const tribe = {
      name: req.body.name,
      region: req.body.region,
      language: req.body.language,
      population: req.body.population,
      culture: req.body.culture,
      provider: req.body.provider,
      date: req.body.date
    };

    const response = await mongodb.getDb().db().collection("tribes").replaceOne({ _id: tribeId }, tribe);

    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || "Error updating tribe");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteTribe = async (req, res) => {
  try {
    const tribeId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db().collection("tribes").deleteOne({ _id: tribeId });

    if (response.deletedCount > 0) {
      res.status(200).send();
    } else {
      res.status(500).json(response.error || "Error deleting tribe");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAll,
  getSingle,
  createTribe,
  updateTribe,
  deleteTribe
};