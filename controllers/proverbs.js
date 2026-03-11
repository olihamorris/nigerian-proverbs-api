const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllProverbs = async (req, res) => {
  try {
    const result = await mongodb.getDb().collection("proverbs").find();
    const proverbs = await result.toArray();
    res.status(200).json(proverbs);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getSingleProverb = async (req, res) => {
  try {
    const proverbId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .collection("proverbs")
      .find({ _id: proverbId });

    const proverb = await result.toArray();
    res.status(200).json(proverb[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createProverb = async (req, res) => {
  try {
    const proverb = {
      proverb: req.body.proverb,
      meaning: req.body.meaning,
      tribe: req.body.tribe
    };

    const response = await mongodb
      .getDb()
      .collection("proverbs")
      .insertOne(proverb);

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
  getAllProverbs,
  getSingleProverb,
  createProverb
};