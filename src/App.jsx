import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(null);
  const [btnColor, setBtnColor] = useState('#2D0A1F');

  // Video la varra mathiri dark colors
  const colors = [
    '#4A1028', '#2D0A4E', '#1A3C5E', 
    '#3D1C2C', '#2E1A47', '#5D0F24', 
    '#1E2A5A', '#4B1542'
  ];

  const generateNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setNumber(randomNum);
    setBtnColor(randomColor);
  };

  return (
    <div className="main-container">
      <div className="card">
        <p className="title">RANDOM NUMBER GENERATOR</p>
        
        {number === null ? (
          <p className="message">NUMBER NOT GENERATED<br/>CLICK BUTTON TO GENERATE</p>
        ) : (
          <>
            <p className="sub-title">THE NUMBER IS</p>
            <h1 className="number">{number}</h1>
          </>
        )}

        <button 
          className="gen-btn" 
          style={{ backgroundColor: btnColor }}
          onClick={generateNumber}
        >
          {number === null ? 'GENERATE' : 'GENERATE AGAIN'}
        </button>
      </div>
    </div>
  );
}

export default App;