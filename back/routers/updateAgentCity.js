'use strict';
const express = require('express');
const router = express.Router();
const Realtor = require('../model/realters');

router.put('/:id/edit', (req, res) => {
  Realtor.findOneAndUpdate(
    { _id: req.params.id },
    { city: req.body.city },
    { returnOriginal: false }
  )
    .then((agent) => {
      if (agent) {
        res.json(agent);
        console.log(agent)
      } else {
        res.status(404).json({ error: 'not a valid id' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'having trouble accessing data' });
    });
});

module.exports = router;
