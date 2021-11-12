'use strict';
const express = require('express');
const router = express.Router();
const Realtor = require('../model/realters');

router.get('/:city', (req, res) => {
  Realtor.find({ city: req.params.city })
    .then((agents) => {
      if (agents.length) {
        res.json(agents);
      } else {
        res.status(404).json({ error: 'not a valid city name' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'problem with accessing data' });
    });
});

module.exports = router;
