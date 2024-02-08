'use client'

import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

interface TimerProps {
  initialTime?: number;
}

export default function Clock({ initialTime = 0 }: TimerProps) {
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

  const formatTime = (timeLeft: number) => {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    const formattedTime =
      hours > 0
        ? `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        : `${minutes}:${seconds.toString().padStart(2, '0')}`;

    return formattedTime;
  };

  return (
    <div>
      <h2>Rest Timer</h2>
      <p>Time: {formatTime(timeLeft)}</p>
      <Button variant="contained" onClick={handleStart} disabled={isRunning}>
        Start
      </Button>
      <Button variant="contained" onClick={handlePause} disabled={!isRunning}>
        Pause
      </Button>
      <Button variant="contained" onClick={handleReset}>Reset</Button>
    </div>
  );
}
