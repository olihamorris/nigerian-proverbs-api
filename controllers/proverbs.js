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

    if (
      !req.body.proverb ||
      !req.body.meaning ||
      !req.body.tribe ||
      !req.body.provider ||
      !req.body.date ||
      !req.body.language ||
      !req.body.category
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const proverb = {
      proverb: req.body.proverb,
      meaning: req.body.meaning,
      tribe: req.body.tribe,
      provider: req.body.provider,
      date: req.body.date,
      language: req.body.language,
      category: req.body.category
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

// UPDATE proverb
const updateProverb = async (req, res) => {
  try {

    if (
      !req.body.proverb ||
      !req.body.meaning ||
      !req.body.tribe ||
      !req.body.provider ||
      !req.body.date ||
      !req.body.language ||
      !req.body.category
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const proverbId = new ObjectId(req.params.id);

    const proverb = {
      proverb: req.body.proverb,
      meaning: req.body.meaning,
      tribe: req.body.tribe,
      provider: req.body.provider,
      date: req.body.date,
      language: req.body.language,
      category: req.body.category
    };

    const response = await mongodb
      .getDb()
      .collection("proverbs")
      .replaceOne({ _id: proverbId }, proverb);

    if (response.modifiedCount > 0) {
      res.status(200).send();
    } else {
      res.status(500).json(response.error);
    }

  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE proverb
const deleteProverb = async (req, res) => {
  try {

    const proverbId = new ObjectId(req.params.id);

    const response = await mongodb
      .getDb()
      .collection("proverbs")
      .deleteOne({ _id: proverbId });

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
  getAllProverbs,
  getSingleProverb,
  createProverb,
  updateProverb,
  deleteProverb
};
