const express = require('express');
const path = require('path');
const logger = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const { notFound, errorHandler } = require('./middleware/errorMiddleware.js');

dotenv.config();
connectDB();

const indexRoutes = require('./routes/indexRoutes');
const userRoutes = require('./routes/userRoutes');
const carRoutes = require('./routes/carRoutes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);

// catch 404 and forward to error handler
app.use(notFound);
app.use(errorHandler);

module.exports = app;
