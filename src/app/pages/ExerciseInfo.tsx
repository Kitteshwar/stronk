interface ExerciseInfoProps{
    exerciseName:string;
}
function ExerciseInfo({exerciseName}:ExerciseInfoProps){
return(
    <div className=" bg-gray-900 text-slate-200 basis-1/2">
    <h1>your exercise appears here
    </h1>
    <div>{exerciseName}</div>
    
  </div>
);


}
export default ExerciseInfo;