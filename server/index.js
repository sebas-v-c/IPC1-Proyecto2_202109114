require('dotenv').config();

const server = require('./api/server');

const port = process.env.SPORT || 5000;
server.listen(port, () => console.log(`Listening on port ${port}...`));
