
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');


const indexRouter = require('./routes/index');


const app = express();


mongoose.set("debug", true); // debugging is on        
mongoose.connect('mongodb://127.0.0.1:27017/jtc', { useNewUrlParser: true })
  .then(() => {
    console.log(`Succesfully Connected to the Mongodb Database at URL : mongodb://127.0.0.1:27017/jtc`);
  })
  .catch(() => {
    console.log(`Error Connecting to the Mongodb Database at URL : mongodb://127.0.0.1:27017/jtc`);
  });



app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET , POST ,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers','Content-Type , Authorization');
  next();
})


app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  const status = err.statusCode || 500;
  const message = err.message;
  const data = err.data;
  res.status(status).json({
    status: status,
    message: message,
    data: data
  })


});

module.exports = app;
