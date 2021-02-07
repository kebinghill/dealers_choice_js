const pg = require('pg');

const client = new pg.Client('postgres://localhost/instruments_db');

const syncAndSeed = async () => {
  await client.query(``);
};

module.exports = {
  client,
  syncAndSeed,
};
