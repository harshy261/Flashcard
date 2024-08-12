import axios from 'axios';

// Base URL for the flashcard API
const API_URL = 'http://localhost:5000/api/flashcards';

// Function to retrieve all flashcards
const getAllFlashcards = () => {
  return axios.get(API_URL);
};

// Function to retrieve a single flashcard by ID
const getFlashcardById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// Function to add a new flashcard
const addFlashcard = (flashcard) => {
  return axios.post(API_URL, flashcard);
};

// Function to update an existing flashcard
const updateFlashcard = (id, flashcard) => {
  return axios.put(`${API_URL}/${id}`, flashcard);
};

// Function to delete a flashcard
const deleteFlashcard = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

// Exporting all service functions
export default {
  getAllFlashcards,
  getFlashcardById,
  addFlashcard,
  updateFlashcard,
  deleteFlashcard,
};
