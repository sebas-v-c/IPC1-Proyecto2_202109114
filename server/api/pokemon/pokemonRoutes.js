const express = require('express');
const router = express.Router();
const database = require('../../data/database');
const db = new database('pokemon');


router.get('/', async (req, res) => {
  const response = await db.table;

  try {
    res.json(response);
  } catch (e) {
    res.json(e);
  }
});


router.get('/id/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (!id) {
    res.status(500).json({ message: 'Invalid ID' })
  } else {

    const pokemon = db.findPokemonById(id);
    if (!pokemon) {
      res.status(500).json({ "message": "No pokemon found" });
    } else {
      res.json([pokemon]);
    }
  }

});

router.get('/name/:name', (req, res) => {
  let name = req.params.name;
  ifInvalidParam(name, res, 'name');
  name = name.toLowerCase();

  const pokemon = db.findPokemonByName(name);

  ifNotFound(pokemon, res);


  if (!pokemon) {
    res.status(500).json({ "message": "No pokemon found" });
  } else {
    res.json([pokemon]);
  }

});

router.get('/type/:type', (req, res) => {
  let type = req.params.type;
  ifInvalidParam(type, res, 'type');

  type = type.toLowerCase();

  const pokemon = db.findPokemonByType(type);

  if (!pokemon) {
    res.status(500).json({ "message": "No pokemon found" });
  } else {
    res.json(pokemon);
  }
});

router.get('/all/:param', (req, res) => {
  let param = req.params.param;
  ifInvalidParam(param, res, 'parameter');
  param = param.toLowerCase();
  param = param.split('_').join(' ')
  if (parseInt(param)) {
    param = parseInt(param);
  }

  const pokemon = db.findPokemonByParam(param);
  if (!pokemon) {
    res.status(500).json({ "message": "No pokemon found" });
  } else {
    res.json(pokemon);
  }
})


function ifNotFound(pokemon, res) {
}

function ifInvalidParam(param, res, type) {
  if (!param) {
    res.status(500).json({ "message": `Invalid ${type}` })
  }
}


module.exports = router;
