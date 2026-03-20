
const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection("proverbs").find();
    const proverbs = await result.toArray();
    res.status(200).json(proverbs);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getSingle = async (req, res) => {
  try {
    const proverbId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection("proverbs").find({ _id: proverbId });
    const proverb = await result.toArray();

    if (!proverb[0]) {
      return res.status(404).json("Proverb not found");
    }

    res.status(200).json(proverb[0]);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const createProverb = async (req, res) => {
  try {
    if (!req.body.proverb || !req.body.meaning) {
      return res.status(400).json({ message: "Missing required fields" });
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

    const response = await mongodb.getDb().db().collection("proverbs").insertOne(proverb);

    res.status(201).json(response);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const updateProverb = async (req, res) => {
  try {
    if (!req.body.proverb || !req.body.meaning) {
      return res.status(400).json({ message: "Missing required fields" });
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

    const response = await mongodb.getDb().db().collection("proverbs")
      .replaceOne({ _id: proverbId }, proverb);

    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json("Update failed");
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const deleteProverb = async (req, res) => {
  try {
    const proverbId = new ObjectId(req.params.id);

    const response = await mongodb.getDb().db().collection("proverbs")
      .deleteOne({ _id: proverbId });

    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json("Delete failed");
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = {
  getAll,
  getSingle,
  createProverb,
  updateProverb,
  deleteProverb
};



