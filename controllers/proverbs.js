const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

// GET all proverbs
const getAllProverbs = async (req, res) => {
  try {
    const result = await mongodb.getDb().collection("proverbs").find();
    const proverbs = await result.toArray();
    res.status(200).json(proverbs);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET single proverb
const getSingleProverb = async (req, res) => {
  try {
    const proverbId = new ObjectId(req.params.id);

    const proverb = await mongodb
      .getDb()
      .collection("proverbs")
      .findOne({ _id: proverbId });

    res.status(200).json(proverb);
  } catch (error) {
    res.status(500).json(error);
  }
};

// CREATE proverb
const createProverb = async (req, res) => {
  try {
    const proverb = {
      proverb: req.body.proverb,
      meaning: req.body.meaning,
      tribe: req.body.tribe,
      provider: req.body.provider,
      date: req.body.date
    };

    const response = await mongodb
      .getDb()
      .collection("proverbs")
      .insertOne(proverb);

    if (response.acknowledged) {
      res.status(201).json({
        message: "Proverb created successfully",
        id: response.insertedId
      });
    } else {
      res.status(500).json("Failed to create proverb");
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