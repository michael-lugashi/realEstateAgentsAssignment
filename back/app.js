'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 3000;
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.dbUri)
  .then((res) => {
    app.listen(port, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
