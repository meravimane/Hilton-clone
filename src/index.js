const express = require('express');

const hotelsController = require('./controllers/hotelsControllers');

const app = express();

app.use(express.json());

app.use( express.static( "public" ) );

app.set("view engine", "ejs");

app.use("/hotels",hotelsController);

module.exports = app;