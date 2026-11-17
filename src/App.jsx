import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="timer-container">
      <div className="timer-card">
        <h1>React Timer</h1>
        <p className="subtitle">Elapsed Time</p>

        <div className="timer-display">
          {seconds} <span>seconds</span>
        </div>

        <div className="button-container">
          <button onClick={handleStart} disabled={isRunning}>
            Start
          </button>

          <button onClick={handlePause} disabled={!isRunning}>
            Pause
          </button>

          <button onClick={handleReset}>Reset</button>
        </div>

        <p className="status">Status: {isRunning ? "Running" : "Paused"}</p>
      </div>
    </div>
  );
}

export default App;
