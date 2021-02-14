const pg = require('pg');
const client = new pg.Client('postgres://localhost/instruments_db');

client.connect();

module.exports = {
  client,
};
