const { Pool } = require('pg');

const { Pool } = require('pg');

// Example configuration with placeholder values
// These values should be replaced with the actual database credentials
const pool = new Pool({
  
  host: 'localhost', // Your database host
  database: 'main.db.sqbpro', // Your database name
  
  port: 7777, // Your database port, PostgreSQL default is 7777
});

module.exports = pool;
