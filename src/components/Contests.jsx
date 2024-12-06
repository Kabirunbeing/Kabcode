import React, { useState } from "react";
import {
  FaStar,
  FaTrophy,
  FaPuzzlePiece,
  FaArrowUp,
  FaArrowDown,
  FaClock,
} from "react-icons/fa";

const ContestRatings = () => {
  const [sortBy, setSortBy] = useState("date"); // Sorting state
  const [contests, setContests] = useState([
    {
      id: 1,
      name: "Weekly Contest 382",
      date: new Date("2024-03-16"),
      userRating: 1876,
      globalRanking: 1523,
      problemsSolved: 3,
      totalProblems: 4,
      ratingChange: "+24",
      timeTaken: "1h 30m",
    },
    {
      id: 2,
      name: "Biweekly Contest 132",
      date: new Date("2024-03-09"),
      userRating: 1852,
      globalRanking: 2045,
      problemsSolved: 2,
      totalProblems: 4,
      ratingChange: "-12",
      timeTaken: "1h 45m",
    },
  ]);

  const getRatingColor = (ratingChange) => {
    return ratingChange.startsWith("+") ? "text-green-500" : "text-red-500";
  };

  const handleSort = (criteria) => {
    setSortBy(criteria);
    const sortedContests = [...contests].sort((a, b) => {
      if (criteria === "date") return new Date(b.date) - new Date(a.date);
      if (criteria === "rating") return b.userRating - a.userRating;
      if (criteria === "ranking") return a.globalRanking - b.globalRanking;
      return 0;
    });
    setContests(sortedContests);
  };

  return (
    <section className="py-10 bg-black text-white">
      <h2 className="text-4xl font-extrabold text-center text-cyan-400 mb-8">
        Contest Ratings
      </h2>

      <div className="container mx-auto px-6">
        {/* Sorting Dropdown */}
        <div className="flex justify-end mb-6">
          <select
            value={sortBy}
            onChange={(e) => handleSort(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none"
          >
            <option value="date">Sort by Date</option>
            <option value="rating">Sort by Rating</option>
            <option value="ranking">Sort by Ranking</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contests.map((contest) => (
            <div
              key={contest.id}
              className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-cyan-400">
                  {contest.name}
                </h3>
                <span className="text-sm text-gray-400">
                  {contest.date.toLocaleDateString()}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Current Rating */}
                <div className="flex items-center space-x-2 group relative">
                  <FaStar className="text-yellow-400 text-xl" />
                  <div>
                    <p className="text-gray-300">Current Rating</p>
                    <p className="text-2xl font-bold text-white">
                      {contest.userRating}
                    </p>
                  </div>
                  <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-700 text-white text-xs p-2 rounded shadow-lg">
                    User's current rating.
                  </div>
                </div>

                {/* Global Ranking */}
                <div className="flex items-center space-x-2 group relative">
                  <FaTrophy className="text-yellow-500 text-xl" />
                  <div>
                    <p className="text-gray-300">Global Ranking</p>
                    <p className="text-2xl font-bold text-white">
                      #{contest.globalRanking}
                    </p>
                  </div>
                  <div className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-700 text-white text-xs p-2 rounded shadow-lg">
                    User's global ranking in the contest.
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <p className="text-gray-300 mb-2">Problems Solved</p>
                <div className="bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-cyan-400 h-4 rounded-full"
                    style={{
                      width: `${
                        (contest.problemsSolved / contest.totalProblems) * 100
                      }%`,
                    }}
                  ></div>
                </div>
                <p className="text-sm text-gray-400 mt-1">
                  {contest.problemsSolved}/{contest.totalProblems}
                </p>
              </div>

              <div className="flex justify-between items-center">
                {/* Rating Change */}
                <div className="flex items-center space-x-2">
                  {contest.ratingChange.startsWith("+") ? (
                    <FaArrowUp className="text-green-500 text-xl" />
                  ) : (
                    <FaArrowDown className="text-red-500 text-xl" />
                  )}
                  <div>
                    <p className="text-gray-300">Rating Change</p>
                    <p
                      className={`text-xl font-semibold ${getRatingColor(
                        contest.ratingChange
                      )}`}
                    >
                      {contest.ratingChange}
                    </p>
                  </div>
                </div>

                {/* Time Taken */}
                <div className="flex items-center space-x-2">
                  <FaClock className="text-gray-400 text-xl" />
                  <div>
                    <p className="text-gray-300">Time Taken</p>
                    <p className="text-xl font-semibold text-white">
                      {contest.timeTaken}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContestRatings;
