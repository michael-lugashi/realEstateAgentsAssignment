'use strict';
const express = require('express');
const router = express.Router();
const Realtor = require('../model/realters');

router.get('', (req, res) => {
  Realtor.distinct('city')
    .then((cities) => {
      res.json(cities);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'having trouble accessing data' });
    });
});

module.exports = router;
