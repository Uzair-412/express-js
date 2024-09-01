const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',      // Your MySQL host
  user: 'root',           // Your MySQL username
  password: '123456',           // Your MySQL password
  database: 'dvm_central_db'     // Your MySQL database name
});

// Promisify for Node.js async/await.
const promisePool = pool.promise();

module.exports = promisePool;
