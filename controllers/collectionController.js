const express = require("express");

const router = express.Router();

const db = require("../models");

router.get("/collections", function (req, res) {
  db.Collection.findAll()
    .then((collections) => {
      console.log(collections);
      res.render("all-collections", { collections });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/collections", function (req, res) {
  db.Collection.findAll()
    .then((collections) => {
      console.log(collections);
      res.json(collections);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/collections/:id", function (req, res) {
  db.Collection.findOne({
    where: {
      id: req.params.id,
    },
    include: [{ model: db.User }],
  })
    .then((Collection) => {
      console.log(Collection);
      res.json(Collection);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

module.exports = router;