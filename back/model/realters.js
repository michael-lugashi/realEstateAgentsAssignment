'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const realtorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
        type: String,
        required: true
    },
    licenseTax: {
      type: Number,
      required: true,
    },
  }
);

const Realtor = mongoose.model('Realtor', realtorSchema);
module.exports = Realtor