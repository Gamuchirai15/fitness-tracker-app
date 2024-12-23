const LandingPage = ({ onStart }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Fitness Tracker</h1>
        <p className="text-lg mb-6">
          Track your workouts, monitor your progress, and stay motivated! Whether you're a beginner or an advanced athlete, our app will help you reach your fitness goals.
        </p>
        <button
          onClick={onStart}
          className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
