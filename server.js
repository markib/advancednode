'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const path = require("path");
const app = express();

fccTesting(app); //For FCC testing purposes
app.set('view engine', 'pug');
// app.set('views', './views/pug');
app.set('views', path.join(__dirname, 'views', 'pug'));
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.route('/').get((req, res) => {
  res.render('index', {
    title: "Welcome to FCC",
    message: "Pug is working!",
    showLogin: true,
    showRegistration: true,
    showSocialAuth: true,
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
