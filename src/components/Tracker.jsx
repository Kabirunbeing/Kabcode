import { useState, useEffect } from "react";

const ProgressTracker = ({ problemIndex }) => {
  const [timeSpent, setTimeSpent] = useState(0);  // In seconds
  const [isTracking, setIsTracking] = useState(false);

  // Start timer when the user starts solving the problem
  useEffect(() => {
    let timer;
    if (isTracking) {
      timer = setInterval(() => setTimeSpent((prev) => prev + 1), 1000); // Increase time every second
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isTracking]);

  // Format time to HH:MM:SS
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="progress-tracker mt-4">
      <div className="flex justify-between items-center mb-2">
        {/* Tiny clock next to time */}
        <span className="text-gray-400 text-sm flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" className="opacity-30" />
            <line x1="12" y1="12" x2="12" y2="6" stroke="currentColor" strokeWidth="2" />
            <line x1="12" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" />
          </svg>
          Time Spent:
        </span>
        <span className="text-white text-xl">{formatTime(timeSpent)}</span>
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={() => setIsTracking(!isTracking)}
          className={`px-4 py-2 bg-cyan-500 text-white rounded-lg ${isTracking ? "bg-red-500" : "bg-green-500"}`}
        >
          {isTracking ? "Stop Tracking" : "Start Tracking"}
        </button>
      </div>
    </div>
  );
};

export default ProgressTracker;
