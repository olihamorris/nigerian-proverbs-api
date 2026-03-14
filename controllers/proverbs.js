const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDb().db().collection("proverbs").find();
  const proverbs = await result.toArray();
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(proverbs);
};

const getSingle = async (req, res) => {
  const proverbId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection("proverbs").find({ _id: proverbId });
  const proverb = await result.toArray();
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(proverb[0]);
};

const createProverb = async (req, res) => {
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

  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error);
  }
};

const updateProverb = async (req, res) => {
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

  const response = await mongodb.getDb().db().collection("proverbs").replaceOne({ _id: proverbId }, proverb);

  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error);
  }
};

const deleteProverb = async (req, res) => {
  const proverbId = new ObjectId(req.params.id);

  const response = await mongodb.getDb().db().collection("proverbs").deleteOne({ _id: proverbId });

  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error);
  }
};

module.exports = {
  getAll,
  getSingle,
  createProverb,
  updateProverb,
  deleteProverb
};