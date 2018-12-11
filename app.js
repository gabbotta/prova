const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const studentiRoutes = require('./api/routes/studenti')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = app;