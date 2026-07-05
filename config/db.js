const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

pool.query(`
    SELECT
        current_database() AS db,
        current_schema() AS schema,
        inet_server_addr() AS server_ip,
        inet_server_port() AS server_port,
        version();
`, (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result.rows[0]);
    }
});

module.exports = pool;
 