import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import flashcardService from '../services/flashcardService';

const EditFlashcard = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    flashcardService.getFlashcardById(id)
      .then(response => {
        setQuestion(response.data.question);
        setAnswer(response.data.answer);
      })
      .catch(error => console.error(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFlashcard = { question, answer };
    flashcardService.updateFlashcard(id, updatedFlashcard)
      .then(() => navigate('/dashboard'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Edit Flashcard</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded">Save Changes</button>
      </form>
    </div>
  );
};

export default EditFlashcard;
