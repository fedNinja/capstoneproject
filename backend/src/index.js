import express from 'express';

import middlewaresConfig from './config/middlewares';
import dbConfig from './config/db';

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

const PORT = process.env.PORT || 8080;

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});
