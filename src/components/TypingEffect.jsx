import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = text;

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setDisplayText(fullText.substring(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100); 

    return () => {
      clearInterval(typingInterval);
    };
  }, [fullText]);

  return (
    <p className='text-base md:text-lg'>{displayText}</p>
  );
};

export default TypingEffect;
