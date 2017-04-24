import express from 'express';

import middlewaresConfig from './config/middlewares';
import dbConfig from './config/db';
var bodyParser = require('body-parser');
var parserJson = bodyParser.json();

import { userRoutes, choreRoutes, childRoutes } from './modules';

const app = express();

/***
Database
**/
dbConfig();
/**
Middleware
**/
middlewaresConfig(app);

app.use('/api', [userRoutes]);
app.use('/api', [choreRoutes]);
app.use('/api', [childRoutes]);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});
