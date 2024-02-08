import React from 'react';
import Link from 'next/link';
import SimpleButton from './pages/SimpleButton';
interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="home-page flex flex-col items-center justify-around ">
      <h1 >Welcome to WorkOutPro!</h1>
      <p>Track your workouts, set goals, and achieve fitness success.</p>


      <div className="action-buttons max-w-32 flex-auto flex-row  ">


        <SimpleButton content='Start a Workout ' address='/startWorkout'/>
        <SimpleButton content='Browse Exercises ' address='/exerciseLibrary'/>
        <div className=" flex-auto m-1 max-w-64 bg-indigo-500 rounded-full">
        <Link  href="/exerciseLibrary">
          <button className="">Browse Exercises</button>
        </Link>
        </div>
      </div>
      <div className="statsPreview ">
        <h3>Recent Progress</h3>
        <ul>
          <li>Workouts completed: 0</li>
          <li>Exercises logged: 0</li>
          <li>Total sets: 0</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
