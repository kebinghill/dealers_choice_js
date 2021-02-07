const express = require('express');
const path = require('path');
const { client, syncAndSeed } = require('./db/server');

const app = express();

app.get('/', async (req, res, next) => {
  try {
    res.send('Hello World');
  } catch (error) {
    next(error);
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on Port ${port}`));
