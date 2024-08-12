import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Home = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedIndex, setFlippedIndex] = useState(null);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/flashcards');
        setFlashcards(response.data);
      } catch (error) {
        console.error('Error fetching flashcards:', error);
      }
    };

    fetchFlashcards();
  }, []);

  const handleFlip = (index) => {
    if (index === currentIndex) {
      setFlippedIndex(flippedIndex === index ? null : index);
    }
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => {
      setFlippedIndex(null); // Reset flip when navigating
      setCurrentIndex(next);
    },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-5xl">
        {flashcards.length > 0 && (
          <Slider {...settings}>
            {flashcards.map((flashcard, index) => (
              <div
                key={index}
                className={`p-4 transform transition-transform duration-500 ease-in-out ${
                  index === currentIndex ? 'scale-100' : 'scale-75'
                }`}
                onClick={() => handleFlip(index)}
              >
                <div className="w-full h-64 p-6 bg-white border border-gray-300 rounded-lg shadow-lg flex items-center justify-center">
                  <div className="flip-card relative w-full h-full cursor-pointer">
                    <div className={`flip-card-inner ${flippedIndex === index ? 'is-flipped' : ''}`}>
                      <div className="flip-card-front p-6 flex items-center justify-center bg-gray-100 text-xl font-bold text-center">
                        {flashcard.question}
                      </div>
                      <div className="flip-card-back p-6 flex items-center justify-center bg-blue-500 text-white text-center">
                        {flashcard.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none z-10"
      onClick={onClick}
    >
      &rarr;
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none z-10"
      onClick={onClick}
    >
      &larr;
    </div>
  );
};

export default Home;
