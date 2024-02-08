'use client'
import React, { useState, useEffect } from 'react';

interface TimerProps {
  initialTime?: number;
}

export default function Timer({ initialTime = 0 }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft + 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  return (
    <div>
      <h2>Timer</h2>
      <p>Time: {timeLeft}</p>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handlePause} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
