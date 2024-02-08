'use client'
import React, { useState, useEffect } from 'react';

export interface TimerProps {
    initialTime: number; // Time in seconds
    onFinish?: () => void; // Optional callback function triggered when timer finishes
  }
  
  const Timer: React.FC<TimerProps> = ({ initialTime, onFinish }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);
  
    useEffect(() => {
      let intervalId: number | undefined;
  
      if (isRunning) {
        intervalId = setInterval(() => {
          setTimeLeft((prevTimeLeft) => Math.max(0, prevTimeLeft - 1));
        }, 1000);
      }
  
      return () => clearInterval(intervalId);
    }, [isRunning, timeLeft]);
  
    const handleStart = () => {
      setIsRunning(true);
    };
  
    const handlePause = () => {
      setIsRunning(false);
    };
  
    const handleReset = () => {
      setTimeLeft(initialTime);
      setIsRunning(false);
    };
  
    const formatTime = (seconds: number) => {
      const minutes = Math.floor(seconds / 60);
      const secondsRemaining = seconds % 60;
      return `${minutes.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;
    };
  
    return (
      <div className="timer">
        <h2>Countdown</h2>
        <p>Time Remaining: {formatTime(timeLeft)}</p>
        <div className="buttons">
          <button onClick={handleStart} disabled={isRunning}>
            Start
          </button>
          <button onClick={handlePause} disabled={!isRunning}>
            Pause
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
        {onFinish && timeLeft === 0 && <onFinish />}
      </div>
    );
  };
  
  export default Timer;
  