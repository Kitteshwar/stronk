'use client'
import React, { useState, useRef } from 'react';
import TimerIcon from '@mui/icons-material/Timer';
import Button from '@mui/material/Button';
import CountDownTimer from '../pages/countdownTimer'; // Assuming CountDownTimer component is in the same directory

export default function StartWorkout() {
  const [showTimer, setShowTimer] = useState(false);
  const [timerClosed, setTimerClosed] = useState(false);
  const [timeLeftWhenClosed, setTimeLeftWhenClosed] = useState(0); // Track time left in the timer when it's closed
  const timerRef =  useRef<any | null>(null); // Ref for accessing the timer component

  const initialTime = 600; // Initial time in seconds (e.g., 10 minutes)

  const handleTimerButtonClick = () => {
    setShowTimer(true);
    if (timerClosed) {
      // If the timer was closed previously, resume it from the time it was closed
      if (timerRef.current !== null) {
        timerRef.current.addTime(timeLeftWhenClosed - timerRef.current.getTimeLeft());
      }
      setTimerClosed(false);
    }
  };

  const handleCloseTimer = () => {
    setShowTimer(false);
    setTimerClosed(true);
    setTimeLeftWhenClosed(timerRef.current.getTimeLeft()); // Save the time left in the timer when it's closed
  };

  return (
    <div className="workout-container">
      <div className="workout-header">
        <div className="workout-title">Evening Workout</div>
        <Button variant="contained" name='timer' startIcon={<TimerIcon />} onClick={handleTimerButtonClick}></Button>
      </div>
      
      <div className="workout-notes">
        <h2>Workout Note</h2>
        {/* Add your workout notes here */}
      </div>

      {showTimer && (
        <div className="timer-overlay">
          <div className="timer-container">
            <CountDownTimer ref={timerRef} initialTime={initialTime} />
            <button onClick={handleCloseTimer}>Close Timer</button>
          </div>
        </div>
      )}

      {timerClosed && (
        <div className="closed-timer-overlay">
          <div className="closed-timer-container">
            <p>The timer is still running in the background...</p>
            <button onClick={() => setShowTimer(true)}>Reopen Timer</button>
          </div>
        </div>
      )}
    </div>
  );
}
