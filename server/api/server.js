const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const morgan = require('morgan');
// const Joi = require('joi');
const app = express();
const cors = require('cors');
const passport = require('passport');
// const fetch = require('node-fetch');
// const _ require('underscore');
// Middleware
const authMidwr = require('../auth/middleware');

// Import routers
const authRouter = require('../auth/authRouter');


// Settings


// Middleware
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
// app.use(passport.authenticate('session'));


// Routes
app.get('/', (req, res) => {
  res.send('<h1>API trabajando al 100%</h1>');
})

app.get('/homepage', authMidwr.checkAuthenticated, (req, res) => {
  res.send('<h1>Estas ingresado</h1>')
})


app.use('/api/auth', authRouter);


// Static files

// Exporting the server
module.exports = app;
