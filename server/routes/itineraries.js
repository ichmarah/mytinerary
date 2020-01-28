const express = require('express');
const itineraries = express.Router();
const itineraryModel = require('../model/itineraryModel')

// get one city from the database to show its itinerary/itineraries. findOne() is a Mongoose method.
itineraries.get('/:name', (req, res) => { // works in Postman!
  // console.log(req.params.name)
  itineraryModel.find({name: req.params.name})
    .then(names => {
      res.send(names)
    })
    .catch(err => console.log(err));
  });

module.exports = itineraries;