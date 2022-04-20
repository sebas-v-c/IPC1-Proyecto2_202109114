const bcrypt = require('bcrypt');

const users = [
  {
    "username": "IPC1B",
    "password": bcrypt.hashSync("Prueba123", 10),
    "avatar": 'https://static.wikia.nocookie.net/wiki_marriland/images/6/60/CynthiaBWSprite.png'
  },
  {
    "username": "IPC1F",
    "password": bcrypt.hashSync("Prueba456", 10),
    "avatar": 'https://static.wikia.nocookie.net/wiki_marriland/images/5/5f/FRLG_Red.png'
  },
  {
    "username": "zibas",
    "password": bcrypt.hashSync("Itsme344", 10),
    "avatar": 'https://static.wikia.nocookie.net/wiki_marriland/images/4/4c/Bruno%28FrLg%29Sprite.png'
  }
];


module.exports = { users };
