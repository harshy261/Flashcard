import React, { useState } from 'react';

const Flashcard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      onClick={handleFlip}
      className={`w-full h-64 p-4 bg-white shadow-md rounded-lg flex items-center justify-center cursor-pointer transform transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}
    >
      <div className="text-xl font-semibold text-center">
        {isFlipped ? answer : question}
      </div>
    </div>
  );
};

export default Flashcard;
