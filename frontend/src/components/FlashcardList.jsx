import React, { useState, useEffect } from 'react';
import Flashcard from './Flashcard';
import flashcardService from '../services/flashcardService';

const FlashcardList = () => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    flashcardService.getAllFlashcards()
      .then(response => setFlashcards(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {flashcards.map(flashcard => (
        <Flashcard key={flashcard.id} question={flashcard.question} answer={flashcard.answer} />
      ))}
    </div>
  );
};

export default FlashcardList;
