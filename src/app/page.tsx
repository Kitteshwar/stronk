import React from 'react';
import Link from 'next/link';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="home-page">
      <h1>Welcome to WorkOutPro!</h1>
      <p>Track your workouts, set goals, and achieve fitness success.</p>
      <div className="action-buttons">
        <Link href="/startWorkout">
          <button>Start a Workout</button>
        </Link>
        <Link href="/exerciseLibrary">
          <button>Browse Exercises</button>
        </Link>
      </div>
      <section className="statsPreview">
        <h3>Recent Progress</h3>
        <ul>
          <li>Workouts completed: 0</li>
          <li>Exercises logged: 0</li>
          <li>Total sets: 0</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
