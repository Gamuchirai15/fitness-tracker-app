import { useState } from "react";

const WorkoutLog = ({ onLogWorkout }) => {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const workoutData = {
      exercise,
      sets,
      reps,
      weight,
      timestamp: new Date().toLocaleString(),
    };
    onLogWorkout(workoutData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Exercise"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Sets"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="w-full bg-blue-500 p-2 rounded text-white">
        Log Workout
      </button>
    </form>
  );
};

export default WorkoutLog;
