const WorkoutHistory = ({ workouts }) => {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Workout History</h2>
        <ul>
          {workouts.map((workout, index) => (
            <li key={index} className="mb-2 p-4 border rounded">
              <p><strong>{workout.exercise}</strong></p>
              <p>Sets: {workout.sets} | Reps: {workout.reps} | Weight: {workout.weight} kg</p>
              <p><small>{workout.timestamp}</small></p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default WorkoutHistory;
  