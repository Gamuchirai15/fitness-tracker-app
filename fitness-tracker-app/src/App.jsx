import { useState } from 'react';
import LandingPage from './components/LandingPage';
import FitnessTracker from './components/FitnessTracker';

const App = () => {
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  return (
    <div className="App">
      {!isStarted ? (
        <LandingPage onStart={handleStart} />
      ) : (
        <FitnessTracker />
      )}
    </div>
  );
};

export default App;

