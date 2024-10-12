
import { useState } from 'react';
import './Button.css'; 

function Button() {
  const [buttonText, setButtonText] = useState('Click Me!');
  const [buttonColor, setButtonColor] = useState('#007BFF');

  const handleClick = () => {
    setButtonText('✔');
    setButtonColor('#2ecc71');
  }

  const handleDoubleClick = () => {
    setButtonText('x');
    setButtonColor('#cb4335');
  }

  return (
    <button 
    className="square-button"
    style={{ backgroundColor: buttonColor }}
    onClick={handleClick}
    onDoubleClick={handleDoubleClick}
    >
      {buttonText}
    </button>
  );
}

export default Button;
