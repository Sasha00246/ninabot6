import React, { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const open = () => {
    tg.close();
  }
  return (
    <div className="App">
      work
      <button onClick={open}>Открыь</button>
    </div>
  );
}

export default App;
