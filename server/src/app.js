const express = require('express');
const cors = require('cors');
const passport = require('passport');
const helmet = require('helmet');
const httpStatus = require('http-status');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');
const morgan = require('./config/morgan');
const routes = require('./routes');
const config = require('./config/config');

const { jwtStrategy } = require('./config/passport');

const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json({ extended: true }));

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data

// gzip compression

// enable cors
app.use(cors());
app.options('*', cors());

// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// limit repeated failed requests to auth endpoints

// api routes
app.use('/', routes);

// send back a 404 error for any unkown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
