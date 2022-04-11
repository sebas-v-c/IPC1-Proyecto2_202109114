const express = require('express');
const morgan = require('morgan');
// const Joi = require('joi');
const app = express();
const cors = require('cors');
// const fetch = require('node-fetch');
// const _ require('underscore');
// Middleware

// Import routers
const authRouter = require('../auth/authRouter');
const pokeRouter = require('./pokemon/pokemonRoutes');
const usersRouter = require('./users/usersRoutes');


// Settings


// Middleware
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
// app.use(passport.authenticate('session'));


// Routes
app.get('/', (req, res) => {
  res.send('<h1>API trabajando al 100%</h1>');
})

app.get('/homepage', (req, res) => {
  res.send('<h1>Estas ingresado</h1>')
})


app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/pokemon', pokeRouter);


// Static files

// Exporting the server
module.exports = app;
