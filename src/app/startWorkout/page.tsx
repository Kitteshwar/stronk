'use client'
import React, { useState, useEffect } from 'react';
import TimerIcon from '@mui/icons-material/Timer';
import Button from '@mui/material/Button';
import CountDownTimer from '../pages/countdownTimer'; // Assuming CountDownTimer component is in the same directory

export default function StartWorkout() {
  const [showTimer, setShowTimer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // Time left in seconds
  const [isRunning, setIsRunning] = useState(true); // State to track if the timer is running or paused

  // Background timer to keep track of time when the main timer is paused
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    // Start the background timer only if the main timer is not paused and the component is mounted
    if (isRunning && showTimer) {
      intervalId = setInterval(() => {
        setTimeLeft(prevTimeLeft => Math.max(0, prevTimeLeft - 1));
      }, 1000);
    }

    // Clean up function to clear the background timer
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, showTimer]);

  const handleTimerButtonClick = () => {
    setShowTimer(prevShowTimer => !prevShowTimer); // Toggle timer visibility
  };

  const handleTimerClose = () => {
    setShowTimer(false); // Hide the timer
  };

  const handleTimerFinish = () => {
    setTimeLeft(0); // Set time left to 0 when the timer finishes
    setShowTimer(false); // Hide the timer
  };

  const handleTimerPause = () => {
    setIsRunning(false); // Pause the timer
  };

  const handleTimerResume = () => {
    setIsRunning(true); // Resume the timer
  };

  return (
    <div className="workout-container">
      <div className="workout-header">
        <div className="workout-title">Evening Workout</div>
        <Button variant="contained" name='timer' startIcon={<TimerIcon />} onClick={handleTimerButtonClick}>
          {showTimer ? 'Hide Timer' : 'Show Timer'}
        </Button>
      </div>
      
      <div className="workout-notes">
        <h2>Workout Note</h2>
        {/* Add your workout notes here */}
      </div>

      {showTimer && (
        <div className="timer-overlay">
          <div className="timer-container">
            <CountDownTimer initialTime={timeLeft} onFinish={handleTimerFinish} isRunning={isRunning} />
            <Button variant="contained" onClick={handleTimerClose}>Close Timer</Button>
            {isRunning ? (
              <Button variant="contained" onClick={handleTimerPause}>Pause Timer</Button>
            ) : (
              <Button variant="contained" onClick={handleTimerResume}>Resume Timer</Button>
            )}
          </div>
        </div>
      )}

      {!showTimer && timeLeft > 0 && (
        <div className="closed-timer-overlay">
          <div className="closed-timer-container">
            <p>The timer is still running in the background...</p>
            <Button variant="contained" onClick={handleTimerButtonClick}>Reopen Timer</Button>
          </div>
        </div>
      )}
    </div>
  );
}
