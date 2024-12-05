import { useState, useEffect } from "react";

// Sample user data with profiles, rankings, and number of problems solved
const leaderboardData = [
  {
    username: "Coder123",
    solved: 120,
    lastActive: "2024-12-03",
    profilePic: "https://www.example.com/profile-pic1.jpg", // Placeholder URL for profile picture
    bio: "Full-stack developer passionate about algorithms",
  },
  {
    username: "TechDev",
    solved: 110,
    lastActive: "2024-12-01",
    profilePic: "https://www.example.com/profile-pic2.jpg",
    bio: "Backend engineer focusing on system design",
  },
  {
    username: "AlgoMaster",
    solved: 95,
    lastActive: "2024-12-04",
    profilePic: "https://www.example.com/profile-pic3.jpg",
    bio: "Competitive programmer with a love for challenges",
  },
  {
    username: "JavaScriptGuru",
    solved: 80,
    lastActive: "2024-12-02",
    profilePic: "https://www.example.com/profile-pic4.jpg",
    bio: "JavaScript enthusiast working on full-stack applications",
  },
  {
    username: "BinaryBuster",
    solved: 75,
    lastActive: "2024-11-30",
    profilePic: "https://www.example.com/profile-pic5.jpg",
    bio: "CS student exploring AI and machine learning",
  },
];

const Leaderboard = () => {
  const [sortedLeaderboard, setSortedLeaderboard] = useState(leaderboardData);
  const [filter, setFilter] = useState("all");

  // Sort leaderboard based on user selection
  useEffect(() => {
    if (filter === "topSolvers") {
      setSortedLeaderboard([...leaderboardData].sort((a, b) => b.solved - a.solved));
    } else if (filter === "mostRecent") {
      setSortedLeaderboard([...leaderboardData].sort((a, b) => new Date(b.lastActive) - new Date(a.lastActive)));
    } else {
      setSortedLeaderboard(leaderboardData);
    }
  }, [filter]);

  return (
    <section className="py-10 bg-black text-white">
      <h2 className="text-4xl font-extrabold text-center text-cyan-400 mb-12">
        KabCode Leaderboard
      </h2>

      {/* Filter dropdown for sorting leaderboard */}
      <div className="text-center mb-8">
        <select
          className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Time Rankings</option>
          <option value="topSolvers">Top Solvers</option>
          <option value="mostRecent">Most Recent Solvers</option>
        </select>
      </div>

      {/* Leaderboard display */}
      <div className="container mx-auto px-6">
        <div className="bg-black rounded-lg p-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedLeaderboard.map((user, index) => (
              <div
                key={index}
                className="bg-black p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-cyan-500"
              >
                <div className="flex flex-col items-center">
                  {/* Profile Picture */}
                  <img
                    src={user.profilePic}
                    alt={user.username}
                    className="w-24 h-24 rounded-full mb-4 border-4 border-cyan-400"
                  />
                  {/* Username and Ranking */}
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">{user.username}</h3>
                  <span className="text-sm text-gray-400 mb-4">{user.solved} Problems Solved</span>
                  {/* Bio */}
                  <p className="text-sm text-gray-300 mb-4 text-center">{user.bio}</p>
                  {/* Last Active */}
                  <p className="text-xs text-gray-400 mb-4">Last Active: {user.lastActive}</p>
                  {/* Profile Link */}
                  <a
                    href="#"
                    className="block text-sm text-cyan-400 hover:text-cyan-500 transition duration-300"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
