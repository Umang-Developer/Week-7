import React, { useState } from 'react';
import HappyImage from './happy.png';  // Replace with your happy face image path
import LikeImage from './like.png';    // Replace with your like icon image path
import SadImage from './sad.png';      // Replace with your sad emoji image path

function EmojiDisplay() {
  const [input, setInput] = useState('');
  const [imageSrc, setImageSrc] = useState(null);

  // Handle input change and update the state
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Handle displaying the corresponding image based on input
  const handleDisplayImage = () => {
    if (input.toLowerCase() === 'happy') {
      setImageSrc(HappyImage);
    } else if (input.toLowerCase() === 'like') {
      setImageSrc(LikeImage);
    } else if (input.toLowerCase() === 'sad') {
      setImageSrc(SadImage);
    } else {
      setImageSrc(null); // If input doesn't match, reset the image
    }
  };

  return (
    <div>
      <div className="input-container">
        <input 
          type="text" 
          value={input} 
          onChange={handleInputChange} 
          placeholder="Type 'Happy', 'Like', or 'Sad'"
        />
        <button onClick={handleDisplayImage}>Show Emoji</button>
      </div>

      <div className="emoji-output">
        {/* Display the image if there is a matching image */}
        {imageSrc && <img src={imageSrc} alt="emoji" style={{ width: '100px', height: '100px' }} />}
      </div>
    </div>
  );
}

export default EmojiDisplay;

