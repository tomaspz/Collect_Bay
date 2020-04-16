// const express = require("express");

// const router = express.Router();

// const db = require("../models");

// router.get("/collectons", function (req, res) {
//   db.Collecton.findAll()
//     .then((collections) => {
//       console.log(collectons);
//       res.render("collections", { collections });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500);
//       res.json({
//         error: true,
//       });
//     });
// });

// router.get("/api/collections", function (req, res) {
//   db.Collection.findAll()
//     .then((collections) => {
//       console.log(collections);
//       res.json(collections);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500);
//       res.json({
//         error: true,
//       });
//     });
// });

// router.get("/api/collections/:id", function (req, res) {
//   db.Collection.findOne({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((collection) => {
//       console.log(collection);
//       res.json(collection);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500);
//       res.json({
//         error: true,
//       });
//     });
// });

// module.exports = router;