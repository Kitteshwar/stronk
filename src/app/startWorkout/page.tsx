import Timer from '../pages/timer';
import React from 'react';
import Image from 'next/image';

export default function startWorkout() {
  return (
    <div className="workout-container">
      <div className="workout-header">
        <div className="workout-title">Evening Workout</div>
        <div className="workout-duration"><Timer initialTime={30} /></div>
      </div>
      
      <div className="workout-notes">
        <h2>Workout Note</h2>
        {/* Add your workout notes here */}
      </div>
    </div>
  );
}