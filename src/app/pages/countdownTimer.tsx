// CountDownTimer.tsx

import React, { useState, useEffect } from 'react';
import styles from '../styles/CountDownTimer.module.css'; // Import CSS for styling

interface TimerProps {
  initialTime: number; // Time in seconds
  onFinish?: () => void; // Optional callback function triggered when timer finishes
  resetOnClose?: boolean; // Optional boolean to control whether the timer should reset on close
}

const CountDownTimer: React.FC<TimerProps> = ({ initialTime, onFinish, resetOnClose = true }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [circleProgress, setCircleProgress] = useState(0); // Track circle progress

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | number | undefined;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimeLeft(prevTimeLeft => Math.max(0, prevTimeLeft - 1));
        setCircleProgress(prevProgress => Math.max(0, prevProgress - (100 / initialTime))); // Update circle progress
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, initialTime, timeLeft]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setTimeLeft(initialTime);
    setCircleProgress(100); // Reset circle progress
  };

  const addTime = (amount: number) => {
    setTimeLeft(prevTimeLeft => Math.min(prevTimeLeft + amount, initialTime));
    setCircleProgress(prevProgress => Math.min(prevProgress + (amount * 100 / initialTime), 100)); // Update circle progress
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;
  };

  const handleFinish = () => {
    if (onFinish) {
      onFinish();
    }
    if (resetOnClose) {
     
    }
  };

  return (
    <div className={styles.countdownTimer}>
      <h2>Countdown Timer</h2>
      <div className={styles.timerContainer}>
        <p className={styles.timeDisplay}>{formatTime(timeLeft)}</p>
        <div className={styles.progressCircle}>
          <div className={styles.progressBar} style={{ width: `${circleProgress}%` }}></div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button className={styles.button} onClick={pauseTimer} disabled={!isRunning}>
          Pause
        </button>
        <button className={styles.button} onClick={resetTimer}>
          Reset
        </button>
        <button className={styles.button} onClick={() => addTime(30)}>+ 30s</button>
        <button className={styles.button} onClick={() => addTime(-30)}>
          - 30s
        </button>
        <button className={styles.button} onClick={() => addTime(60)}>
          + 1m
        </button>
        <button className={styles.button} onClick={() => addTime(120)}>
          + 2m
        </button>
        <button className={styles.button} onClick={() => addTime(180)}>
          + 3m
        </button>
      </div>
      {timeLeft === 0 && <div>Timer Finished!</div>}
    </div>
  );
};

export default CountDownTimer;
