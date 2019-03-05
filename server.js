const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Pet = require('./models').Pet;
const Owner = require('./models').Owner;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(3000, () => console.log('Pet and owner listening to port 3000.'));