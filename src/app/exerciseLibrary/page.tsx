
import ListItem from '../pages/ListItem';
function ExerciseLibrary() {
    const exerciseChoices = ["AB WHEEL", "AEROBICS", "ARNOLD DB PRESS","AB WHEEL", 
    "AEROBICS", "ARNOLD DB PRESS","AB WHEEL", "AEROBICS", "ARNOLD DB PRESS",
    "AB WHEEL", "AEROBICS", "ARNOLD DB PRESS","AB WHEEL", "AEROBICS", "ARNOLD DB PRESS"
    ,"AB WHEEL", "AEROBICS", "ARNOLD DB PRESS"];
  
    return (

      <div className="bg-gray-900 h-screen flex flex-col">
      <h1 className='text-slate-200'>Choose from below exercises</h1>
      <div className='grid grid-rows-3 grid-flow-col gap-x-0'>
        {exerciseChoices.map((exerciseChoice,index)=>(
          <ListItem index={index} exerciseChoice={exerciseChoice}/>
        ))}
      </div>

      </div>
    );
  }
  
  export default ExerciseLibrary;
