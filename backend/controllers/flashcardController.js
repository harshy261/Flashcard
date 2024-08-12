const db = require('../config/db');

const addFlashcard = (req, res) => {
  const { question, answer } = req.body;

  const query = 'INSERT INTO flashcards (question, answer) VALUES (?, ?)';

  db.query(query, [question, answer], (err, result) => {
    if (err) {
      console.error('Error inserting flashcard:', err);
      return res.status(500).json({ error: 'Failed to add flashcard' });
    }
    res.status(201).json({ message: 'Flashcard added successfully' });
  });
};

const getFlashcards = (req, res) => {
  const query = 'SELECT * FROM flashcards';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

module.exports = { addFlashcard, getFlashcards };
