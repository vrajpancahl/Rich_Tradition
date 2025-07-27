import React, { useState, useEffect } from 'react';
import '../pages/AutoType_CSS.css';
import '../pages/media_query_CSS.css';

const AutoType = () => {
    const texts = [
    "Management",
    "Decoration",
    "Catering",
  ];

  const typingSpeed = 100;      // typing speed in ms
  const delayBetweenWords = 1500; // pause after word is fully typed

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        // Move to next word without deleting
        setCharIndex(0);
        setCurrentText('');
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, delayBetweenWords);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex, texts]);

  return (
    <div className="typewriter ">
        <span className='Font-DancingScript autoType_font_size'>{currentText}</span>
      <span className="cursor Font-DancingScript autoType_font_size">|</span>
    </div>
  );
};

export default AutoType;
