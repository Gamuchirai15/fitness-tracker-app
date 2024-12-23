import { useState, useEffect } from "react";

const ExerciseSearch = ({ onExerciseSelect }) => {
  const [muscleGroups, setMuscleGroups] = useState([]);
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExerciseDetails, setSelectedExerciseDetails] = useState(null);
  const [loading, setLoading] = useState(false);  // For loading state
  const [error, setError] = useState(null);        // For error handling

  useEffect(() => {
    const fetchMuscleGroups = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://wger.de/api/v2/muscle/?language=2");
        const data = await response.json();
        setMuscleGroups(data.results);
        setLoading(false);
      } catch (error) {
        setError("Error fetching muscle groups");
        setLoading(false);
        console.error("Error fetching muscle groups:", error);
      }
    };

    fetchMuscleGroups();
  }, []);

  useEffect(() => {
    if (selectedMuscleGroup) {
      const fetchExercises = async () => {
        try {
          setLoading(true);
          const response = await fetch(`https://wger.de/api/v2/exercise/?muscle=${selectedMuscleGroup}&language=2`);
          const data = await response.json();
          setExercises(data.results);
          setLoading(false);
        } catch (error) {
          setError("Error fetching exercises");
          setLoading(false);
          console.error("Error fetching exercises:", error);
        }
      };

      fetchExercises();
    }
  }, [selectedMuscleGroup]);

  const fetchExerciseDetails = async (exerciseId) => {
    try {
      setLoading(true);
      const response = await fetch(`https://wger.de/api/v2/exerciseinfo/${exerciseId}/?language=2`);
      const data = await response.json();
      setSelectedExerciseDetails(data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching exercise details");
      setLoading(false);
      console.error("Error fetching exercise details:", error);
    }
  };

  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-pink-50 rounded-lg shadow-md">
      {/* Optional Error Message */}
      {error && <div className="bg-pink-200 text-pink-800 p-4 rounded mb-4">{error}</div>}

      {/* Loading Spinner */}
      {loading && <div className="text-center text-pink-600">Loading...</div>}

      <div className="mb-6">
        <label htmlFor="muscle-group" className="block text-lg font-medium text-pink-800 mb-2">Select Muscle Group:</label>
        <select
          id="muscle-group"
          value={selectedMuscleGroup || ""}
          onChange={(e) => setSelectedMuscleGroup(e.target.value)}
          className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          <option value="">-- Choose a muscle group --</option>
          {muscleGroups.map((group) => (
            <option key={group.id} value={group.id} className="p-2">
              {group.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for an exercise..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <ul className="mb-6 space-y-2">
        {filteredExercises.length > 0 ? (
          filteredExercises.map((exercise) => (
            <li
              key={exercise.id}
              onClick={() => {
                onExerciseSelect(exercise);
                fetchExerciseDetails(exercise.id);
              }}
              className="cursor-pointer p-3 bg-pink-100 rounded-lg hover:bg-pink-200 transition duration-300"
            >
              {exercise.name}
            </li>
          ))
        ) : (
          <li className="text-center text-gray-500">No exercises found</li>
        )}
      </ul>

      {selectedExerciseDetails && (
        <div className="mt-8 bg-pink-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-pink-800 mb-4">Exercise Details</h2>
          <p className="text-lg text-pink-800 mb-4"><strong>Name:</strong> {selectedExerciseDetails.name}</p>
          <div
            className="description mb-4 text-pink-700"
            dangerouslySetInnerHTML={{ __html: selectedExerciseDetails.description }}
          />
          <div className="mb-4">
            <h3 className="font-semibold text-pink-800">Recommended Sets and Reps</h3>
            <p>{selectedExerciseDetails.recommended_sets} sets x {selectedExerciseDetails.recommended_reps} reps</p>
          </div>
          <div>
            <h3 className="font-semibold text-pink-800">Images</h3>
            {selectedExerciseDetails.images.length > 0 ? (
              selectedExerciseDetails.images.map((image, index) => (
                <img key={index} src={image.image} alt={`Exercise image ${index}`} className="mt-4 w-full rounded-lg" />
              ))
            ) : (
              <p className="text-pink-500">No images available</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseSearch;
