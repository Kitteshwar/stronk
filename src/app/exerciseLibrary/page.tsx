function ExerciseLibrary() {
    const exerciseChoices = ["Exercise 1", "Exercise 2", "Exercise 3"];
  
    return (
      <div>
        <h1>CHOOSE FROM BELOW EXERCISES</h1>
        <form>
          {exerciseChoices.map((exercise, index) => (
            <div key={index}>
              <input type="radio" id={`exercise${index}`} name="exercise" value={exercise} />
              <label htmlFor={`exercise${index}`}>{exercise}</label>
            </div>
          ))}
        </form>
      </div>
    );
  }
  
  export default ExerciseLibrary;
  