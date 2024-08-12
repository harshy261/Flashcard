const express = require('express');
const router = express.Router();
const { addFlashcard } = require('../controllers/flashcardController');
const { getFlashcards } = require('../controllers/flashcardController');


router.get('/', getFlashcards);
router.post('/add', addFlashcard);


module.exports = router;