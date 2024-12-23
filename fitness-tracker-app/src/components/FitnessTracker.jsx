import { useState } from "react";
import ExerciseSearch from "./ExerciseSearch";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const FitnessTracker = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [workoutHistory, setWorkoutHistory] = useState([]);
  const [workoutData, setWorkoutData] = useState({
    labels: [],
    datasets: [
      {
        label: "Total Weight Lifted",
        data: [],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: false,
      },
    ],
  });

  const handleExerciseSelect = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleWorkoutSubmit = (exercise, sets, reps, weight) => {
    const workoutEntry = {
      exercise: exercise.name,
      sets,
      reps,
      weight,
      date: new Date().toLocaleString(),
    };

    setWorkoutHistory((prevHistory) => [...prevHistory, workoutEntry]);

    const totalWeightLifted = sets * reps * weight;
    setWorkoutData((prevData) => ({
      labels: [...prevData.labels, workoutEntry.date],
      datasets: [
        {
          ...prevData.datasets[0],
          data: [...prevData.datasets[0].data, totalWeightLifted],
        },
      ],
    }));
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Fitness Tracker</h1>

      <ExerciseSearch onExerciseSelect={handleExerciseSelect} />

      {selectedExercise && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Selected Exercise:</h2>
          <p><strong>Name:</strong> {selectedExercise.name}</p>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: selectedExercise.description }}
          />
          <div className="mt-4">
            <h3 className="text-lg">Log Workout</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const sets = parseInt(e.target.sets.value);
                const reps = parseInt(e.target.reps.value);
                const weight = parseInt(e.target.weight.value);
                handleWorkoutSubmit(selectedExercise, sets, reps, weight);
              }}
            >
              <input type="number" name="sets" placeholder="Sets" required className="p-2 border rounded mr-2" />
              <input type="number" name="reps" placeholder="Reps" required className="p-2 border rounded mr-2" />
              <input type="number" name="weight" placeholder="Weight" required className="p-2 border rounded mr-2" />
              <button type="submit" className="bg-blue-500 text-white p-2 rounded">Log Workout</button>
            </form>
          </div>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-bold">Workout History</h2>
        <ul className="space-y-2 mt-4">
          {workoutHistory.map((entry, index) => (
            <li key={index} className="p-2 border rounded">
              <strong>{entry.exercise}</strong> - {entry.sets} sets x {entry.reps} reps x {entry.weight}kg
              <br />
              <small>{entry.date}</small>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold">Progress Chart</h2>
        <Line data={workoutData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default FitnessTracker;
