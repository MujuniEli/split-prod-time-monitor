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
  let buttonStyle = {
    background: 'linear-gradient(145deg, #66a3ff, #0056b3)', // Default 3D gradient
  };

  if (clicked) {
    buttonText = "✔"; // Hex symbol for checkmark
    buttonStyle.background = "#2ecc71"; // Green background for single click
  }

  if (doubleClicked) {
    buttonText = "✘"; // Hex symbol for cross
    buttonStyle.background = "#cb4335"; // Red background for double click
  }

  return (
    <button
      className="square-button"
      style={buttonStyle} // Apply dynamic styles here
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      {buttonText}
    </button>
  );
}

export default Button;
