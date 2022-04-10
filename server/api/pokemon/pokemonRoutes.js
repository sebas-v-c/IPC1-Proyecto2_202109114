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


// TODO obtain pokemon by number
router.get('/:id', checkAuthenticated, (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    res.status(500).json({ "message": "ID not found" })
  }
  const pokemon = db.findPokemonById(id);
  if (!pokemon) {
    res.status(500).json({ "message": "no pokemon found" })
  }
  res.json(pokemon);
});
// TODO obtain pokemon by name
router.post('/name/:name', checkAuthenticated, (req, res) => {
  const name = req.params.name;
  if (!name) {
    res.status(500).json({ "message": "No name send" });
  }

  const pokemon = db.findPokemonByName(name);
  if (!pokemon) {
    res.status(500).json({ "message": "No pokemon found" });
  }
  res.json(pokemon);
});
// TODO obtain pokemon by type
router.post('/type/:type', checkAuthenticated, (req, res) => {
  const type = req.params.type;
  if (!type) {
    res.status(500).json({ "message": "No type send" });
  }

  const pokemon = db.findPokemonByType(type);
  if (!pokemon) {
    res.status(500).json({ "message": "No pokemon found" });
  }
  res.json(pokemon);
});


module.exports = router;
