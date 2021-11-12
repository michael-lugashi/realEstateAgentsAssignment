'use strict'
const csv = require('csvtojson');
const path = require('path');
const mongoose = require('mongoose');
const Realtor = require('../model/realters');
require('dotenv').config();

mongoose.connect(process.env.dbUri)

const csvFilePath = path.resolve(__dirname, '../assets/realtors.csv');
console.log(csvFilePath)
csv()
  .fromFile(csvFilePath)
  .then((realtors)=>{

    const realtorCollection = realtors.map((realtor) => {

      const licenseTax = Object.values(realtor)[0].trim();
      const name = Object.values(realtor)[1].trim();
      const city = Object.values(realtor)[2].trim();

      return {
       licenseTax,
       name,
       city,
      }

    })
      .filter(realtor => {
        return realtor.licenseTax
          && realtor.name
          && realtor.city
      })

    Realtor.insertMany(realtorCollection)
      .then(function(){
        console.log("Data inserted")  // Success
      }).catch(function(error){
        console.log(error)      // Failure
    });

  })