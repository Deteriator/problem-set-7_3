const { Pool } = require('pg');

const pool = new Pool({
  user: 'Deteriator',
  host: 'localhost',
  database: 'tasklist',
  password: null,
  port: 5432,
  connectionString: process.env.DATABASE_URL,
  ssl: true
});


module.exports = {
  query: (text, params) => pool.query(text, params),
};