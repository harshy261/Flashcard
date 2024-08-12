const mysql = require('mysql2');

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',    // MySQL server host
  user: 'app_user',     // MySQL username
  password: 'flashcardsqldb', // MySQL user password
  database: 'flashcards_db' // Name of the database you created
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

module.exports = db;