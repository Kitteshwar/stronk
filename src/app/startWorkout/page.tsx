import Clock from '../pages/workoutClock';
import React from 'react';
import Image from 'next/image';
import TimerIcon from '@mui/icons-material/Timer';
import Button from '@mui/material/Button';

export default function startWorkout() {
  return (
    <div className="workout-container">
      <div className="workout-header">
        <div className="workout-title">Evening Workout</div>
        <Button variant="contained" startIcon={<TimerIcon />}></Button>
        <div className="workout-duration"><Clock initialTime={0} /></div>
      </div>
      
      <div className="workout-notes">
        <h2>Workout Note</h2>
        {/* Add your workout notes here */}
      </div>
    </div>
  );
}