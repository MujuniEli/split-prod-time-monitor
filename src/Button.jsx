// src/Button.jsx
import { useState } from 'react';
import './Button.css';

function Button() {
  const [clicked, setClicked] = useState(false);
  const [doubleClicked, setDoubleClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setDoubleClicked(false);
  };

  const handleDoubleClick = () => {
    setDoubleClicked(true);
    setClicked(false);
  };

  let buttonText = "Click Me";
  let buttonStyle = {};

  if (clicked) {
    buttonText = "✔"; // Hex symbol for checkmark
    buttonStyle = {
      backgroundColor: "#2ecc71", // Green background when clicked once
    };
  }

  if (doubleClicked) {
    buttonText = "✘"; // Hex symbol for cross
    buttonStyle = {
      backgroundColor: "#cb4335", // Red background when double-clicked
    };
  }

  return (
    <button
      className="square-button"
      style={buttonStyle}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      {buttonText}
    </button>
  );
}

export default Button;
