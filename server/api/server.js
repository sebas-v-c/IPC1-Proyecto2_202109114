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

const initializePassport = require('../passport-config');
initializePassport(
  passport
);

// Import routers
const usersRouter = require('./users/usersRoute');
const authRouter = require('../auth/authRouter');


// Settings


// Middleware
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
// app.use(session({
//   secret: 'secret',
//   resave: true,
//   saveUninitialized: true
// }));


// Routes
app.get('/', (req, res) => {
  res.send('<h1>API trabajando al 100%</h1>');
})

app.use('/api/users', usersRouter);

app.use('/api/auth', authRouter);


// Static files

// Exporting the server
module.exports = app;
