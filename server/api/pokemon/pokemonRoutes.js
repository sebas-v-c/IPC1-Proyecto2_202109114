const express = require('express');
const router = express.Router();
const { checkAuthenticated } = require('../../auth/middleware');
const database = require('../../data/database');
const db = new database('pokemon');


router.get('/', checkAuthenticated, async (req, res) => {
  const response = await db.table;

  try {
    res.json(response);
  } catch (e) {
    res.json(e);
  }
});


router.get('/:id', /* checkAuthenticated, */(req, res) => {
  const id = parseInt(req.params.id);
  ifInvalidParam(id, res, 'ID');
  const pokemon = db.findPokemonById(id);
  ifNotFound(pokemon, res)

  res.json(pokemon);
});

router.get('/name/:name', /* checkAuthenticated, */(req, res) => {
  let name = req.params.name;
  ifInvalidParam(name, res, 'name');
  name = name.toLowerCase();

  const pokemon = db.findPokemonByName(name);

  ifNotFound(pokemon, res);

  res.json(pokemon);
});

router.get('/type/:type', /* checkAuthenticated, */(req, res) => {
  let type = req.params.type;
  ifInvalidParam(type, res, 'type');

  type = type.toLowerCase();

  const pokemon = db.findPokemonByType(type);

  ifNotFound(pokemon, res);

  res.json(pokemon);
});

router.get('/all/:param', /* checkAuthenticated,*/(req, res) => {
  let param = req.params.param;
  ifInvalidParam(param, res, 'parameter');
  param = param.toLowerCase();
  param = param.split('_').join(' ')
  if (parseInt(param)) {
    param = parseInt(param);
  }

  const pokemon = db.findPokemonByParam(param);
  ifNotFound(pokemon, res);

  res.json(pokemon);
})


function ifNotFound(pokemon, res) {
  if (!pokemon) {
    res.status(500).json({ "message": "No pokemon found" });
  }
}

function ifInvalidParam(param, res, type) {
  if (!param) {
    res.status(500).json({ "message": `Invalid ${type}` })
  }
}


module.exports = router;
