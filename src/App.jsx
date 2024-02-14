import React, { useState } from 'react';
import imageSrc from './assets/flowers.gif';
import kissSrc from './assets/wink.gif';
import kapSrc from './assets/kap.png';
import './App.css';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [yesSize, setYesSize] = useState(16);
  const [showMessage, setShowMessage] = useState(false);
  const [showQuestion, setShowQuestion] = useState(true);
  const [noButtonText, setNoButtonText] = useState("No");
  const [noButtonColor, setNoButtonColor] = useState("red");
  const noButtonOptions = [
    "No",
    "Please",
    "Joke mo lang diba?",
    "Wrong click?",
    "sige naa. sige na plss",
    "plsssssssss",
    "Click mo yung YES, Sabi yung Yes, yung Color greeen"
  ];
  const [noButtonIndex, setNoButtonIndex] = useState(0);

  const handleNoClick = () => {
    setYesSize(yesSize + 10);
    setShowMessage(false);

    let newIndex = noButtonIndex + 1;
    if (newIndex >= noButtonOptions.length) {
      newIndex = 0; // Reset to the beginning if end of options reached
    }

    setNoButtonIndex(newIndex);
    setNoButtonText(noButtonOptions[newIndex]);

    if (newIndex === 7) {
      setNoButtonColor("green"); // Change color only when reaching the end of options
    } else {
      setNoButtonColor("red");
    }
  };

  const handleYesClick = () => {
    setYesSize(100);
    setShowMessage(true);
    setShowQuestion(false);
  };

  return (
    <>
      <div>
        {showQuestion && (
          <div style={{ marginBottom: '20px' }}>
            <img src={imageSrc} alt="Your Image" style={{ width: '200px' }} />
            <h2>Will you be my Valentine?</h2>
            <div>
              <button onClick={handleYesClick} style={{ fontSize: yesSize, backgroundColor: 'green', color: 'white', marginRight: '10px' }}>
                Yes
              </button>
              <button onClick={handleNoClick} style={{ backgroundColor: noButtonColor, color: 'white' }}>{noButtonText}</button>
            </div>
          </div>
        )}
        {showMessage && (
          <div style={{ marginTop: '20px' }}>
            <img src={kissSrc} alt="Your Image" style={{ width: '200px' }} />
            <h2>You are worth it and beautiful &hearts; HVD! </h2>
            {/* <img src={kapSrc} alt="Your Image" style={{ width: '200px' }} />
            <h2>Ulul pakyu!</h2> */}
          </div>
        )}
      </div>
      <Analytics />
    </>
  );
}

export default App;
