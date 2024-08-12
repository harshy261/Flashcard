const db = require('../config/db');

// Define methods for interacting with the flashcards table in your database

// For example, a function to get all flashcards:
const getAllFlashcards = (callback) => {
  const query = 'SELECT * FROM flashcards';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching flashcards:', err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Export your methods to be used in the controllers
module.exports = {
  getAllFlashcards,
  // Add more functions as needed
};
