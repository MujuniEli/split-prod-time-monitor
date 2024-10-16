
import { useState } from 'react';
import Button from './Button';
import './App.css';

function App() {
  const [rows, setRows] = useState('');
  const [cols, setCols] = useState('');
  const [grid, setGrid] = useState([]);
  const [gridMessage, setGridMessage] = useState('');
  const [gridDimensions, setGridDimensions] = useState({rows: 0, cols: 0})

  const handleInputChange = (e, setFunction) => {
    const value = e.target.value;

    if(/^\d*$/.test(value)) {
      const number = parseInt(value, 10);
      if (number >= 2 && number <= 12) {
        setFunction(value);
   }else if (value === ''){
     setFunction('');
   }}
  };

  const createGrid = () => {
    const rowsNum = parseInt(rows, 10);
    const colsNum = parseInt(cols, 10);
    if (rowsNum && colsNum) {
      const newGrid = Array(rowsNum).fill(Array(colsNum).fill(''));
      setGrid(newGrid);

      //Update grid Dimensions state
      setGridDimensions({rows:rowsNum, cols:colsNum});

      //Set message about the grid created
      setGridMessage(`You have created a ${rowsNum}x${colsNum} grid`);

      //clear input fields
      setRows('');
      setCols('');
    }
  };

  return (
    <div className="App">
        <div className="instructions">
        <p>
          Welcome to the Simple Focus App! <br />
          To create a grid of buttons:
        </p>
        <ul>
          <li>Enter the number of rows (between 2 and 12).</li>
          <li>Enter the number of columns (between 2 and 12).</li>
          <li>Click the "Create Grid" button to generate the grid.</li>
          <li>
            Click a button once to mark it as done (<span>✔</span>).
          </li>
          <li>
            Double-click a button to mark it as missed (<span>✘</span>).
          </li>
        </ul>
      </div>
      <div className="input-container">
        <input
          type='text'
          placeholder='Rows'
          value={rows}
          onChange={(e) => handleInputChange(e, setRows)}
          className='number-input' 
        />
        <input
          type='text'
          placeholder='Columns'
          value={cols}
          onChange={(e) => handleInputChange(e, setCols)}
          className='number-input' 
        />

        <button className="create-grid-button" onClick={createGrid}>
            Create Grid
        </button>
      </div>

      {/* Display the message after grid is created */}
      {gridMessage && <p className='grid-message'>{gridMessage}</p>}

      <div className='grid-container'
        style={{ gridTemplateColumns: `repeat(${gridDimensions.cols || 1}, 1fr)` }}
      >
        {grid.map((row, rowIndex) => (
          
            row.map((_, colIndex) => (
              <Button key= {`${rowIndex}-${colIndex}`} />
            ))
          
        ))}
        

      </div>
    </div>
  );
}

export default App;
