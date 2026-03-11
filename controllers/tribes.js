
const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllTribes = async (req, res) => {
  try {
    const result = await mongodb.getDb().collection("tribes").find();
    const tribes = await result.toArray();
    res.status(200).json(tribes);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getSingleTribe = async (req, res) => {
  try {
    const tribeId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .collection("tribes")
      .find({ _id: tribeId });

    const tribe = await result.toArray();
    res.status(200).json(tribe[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createTribe = async (req, res) => {
  try {
    const tribe = {
      name: req.body.name,
      region: req.body.region,
      description: req.body.description
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

module.exports = {
  getAllTribes,
  getSingleTribe,
  createTribe
};