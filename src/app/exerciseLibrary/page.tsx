'use client'
import { useState } from 'react';
import ExerciseInfo from '../pages/ExerciseInfo';
import ListItem from '../pages/ListItem';
interface pageProps{
  exerciseName:string;
}
function ExerciseLibrary() {
    const exerciseChoices = ["AB WHEEL", "AEROBICS", "ARNOLD DB PRESS","AB WHEEL", 
    "AEROBICS", "ARNOLD DB PRESS","AB WHEEL", "AEROBICS", "ARNOLD DB PRESS",
    "AB WHEEL", "AEROBICS", "ARNOLD DB PRESS","AB WHEEL", "AEROBICS", "ARNOLD DB PRESS"
    ,"AB WHEEL", "AEROBICS", "ARNOLD DB PRESS"];
    const [CurrentExerciseName, setCurrentExerciseName]=useState('sample ex');
    let screen = <ExerciseInfo exerciseName={CurrentExerciseName}/>
    function onClickHandler(exerciseName:string){
      setCurrentExerciseName(exerciseName)
      // screen = <ExerciseInfo exerciseName={exerciseName}/>
      console.log("hi");
      
    }


    return (
      <div className='h-screen flex flex-col'>
      <div className="bg-gray-900  flex flex-col basis-1/2">
      <h1 className='text-slate-200 my-10'>Choose from below exercises</h1>
      <div className='grid grid-rows-3 grid-flow-col gap-x-0'>
        {exerciseChoices.map((exerciseChoice,index)=>(
          <>
          <ListItem index={index} exerciseChoice={exerciseChoice} onClick={()=>onClickHandler(exerciseChoice)}/>
          
          </>
        ))}
      </div>

      </div>

         {screen}



      </div>
    );
  }
  
  export default ExerciseLibrary;
