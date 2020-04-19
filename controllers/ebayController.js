const express = require("express");
const router = express.Router();
const axios = require('axios');

const db = require("../models");


router.get("/ebay/:searchTerm", function (req, res) {

  const queryEbay = `https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=${process.env.EBAY_APP_ID}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${req.params.searchTerm}&paginationInput.entriesPerPage=8`;

  axios.get(queryEbay)
    .then(response => {
      let ebayCollectionsArray = response.data.findItemsByKeywordsResponse[0].searchResult[0].item;
      // res.json(ebayCollectionsArray);
      res.render("ebay", {
        ebayCollections: ebayCollectionsArray
      });
    }).catch(err => {
      console.log(err);
      res.json(err);
    })
})

router.get("/ebay", function (req, res) {
  res.render("ebay");
});

router.post("/api/ebaycollections", function (req, res) {
  let newCollection = req.body;
  console.log(newCollection);
  db.EbayCollections.create(newCollection)
    .then((res) => {
      res.json({
        message: "Successfully created new collection",
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});


module.exports = router;