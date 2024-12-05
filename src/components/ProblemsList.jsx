import { useState } from "react";
// import ProgressTracker from "./Tracker";

// Sample data for problems (linked to actual LeetCode problems).
const problemCategories = [
  {
    category: "Arrays",
    problems: [
      { title: "Two Sum", link: "https://leetcode.com/problems/two-sum/", solved: false, difficulty: "Easy" },
      { title: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", solved: false, difficulty: "Medium" },
      { title: "Container With Most Water", link: "https://leetcode.com/problems/container-with-most-water/", solved: true, difficulty: "Hard" },
      { title: "Product of Array Except Self", link: "https://leetcode.com/problems/product-of-array-except-self/", solved: false, difficulty: "Medium" },
      { title: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/", solved: true, difficulty: "Easy" },
      { title: "Find Minimum in Rotated Sorted Array", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", solved: true, difficulty: "Medium" },
      { title: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", solved: false, difficulty: "Medium" },
      { title: "Move Zeroes", link: "https://leetcode.com/problems/move-zeroes/", solved: true, difficulty: "Medium" },
      { title: "Maximum Product Subarray", link: "https://leetcode.com/problems/maximum-product-subarray/", solved: false, difficulty: "Hard" },
      { title: "Spiral Matrix", link: "https://leetcode.com/problems/spiral-matrix/", solved: true, difficulty: "Medium" },
      { title: "Subarray Sum Equals K", link: "https://leetcode.com/problems/subarray-sum-equals-k/", solved: false, difficulty: "Medium" },
      { title: "Sum of Two Integers", link: "https://leetcode.com/problems/sum-of-two-integers/", solved: false, difficulty: "Easy" },
      { title: "Single Number", link: "https://leetcode.com/problems/single-number/", solved: true, difficulty: "Easy" },
      { title: "Find All Numbers Disappeared in an Array", link: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/", solved: false, difficulty: "Easy" },
      { title: "Sort Colors", link: "https://leetcode.com/problems/sort-colors/", solved: true, difficulty: "Medium" },
      { title: "Valid Sudoku", link: "https://leetcode.com/problems/valid-sudoku/", solved: true, difficulty: "Medium" },
      { title: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", solved: true, difficulty: "Hard" },
      { title: "Rotate Image", link: "https://leetcode.com/problems/rotate-image/", solved: false, difficulty: "Medium" },
      { title: "Find the Duplicate Number", link: "https://leetcode.com/problems/find-the-duplicate-number/", solved: true, difficulty: "Medium" },
      { title: "Kth Largest Element in an Array", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", solved: false, difficulty: "Medium" },
    ],
  },
  {
    category: "Linked Lists",
    problems: [
      { title: "Add Two Numbers", link: "https://leetcode.com/problems/add-two-numbers/", solved: true, difficulty: "Medium" },
      { title: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", solved: false, difficulty: "Medium" },
      { title: "Palindrome Linked List", link: "https://leetcode.com/problems/palindrome-linked-list/", solved: false, difficulty: "Hard" },
      { title: "Linked List Cycle", link: "https://leetcode.com/problems/linked-list-cycle/", solved: true, difficulty: "Easy" },
      { title: "Intersection of Two Linked Lists", link: "https://leetcode.com/problems/intersection-of-two-linked-lists/", solved: false, difficulty: "Medium" },
      { title: "Remove Nth Node From End of List", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", solved: true, difficulty: "Medium" },
      { title: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/", solved: true, difficulty: "Easy" },
      { title: "Merge k Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/", solved: false, difficulty: "Hard" },
      { title: "Add Two Numbers II", link: "https://leetcode.com/problems/add-two-numbers-ii/", solved: true, difficulty: "Medium" },
      { title: "Flatten a Multilevel Doubly Linked List", link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/", solved: false, difficulty: "Hard" },
      { title: "Reorder List", link: "https://leetcode.com/problems/reorder-list/", solved: false, difficulty: "Medium" },
      { title: "Remove Duplicates from Sorted List", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/", solved: true, difficulty: "Easy" },
      { title: "Odd Even Linked List", link: "https://leetcode.com/problems/odd-even-linked-list/", solved: true, difficulty: "Medium" },
      { title: "Copy List with Random Pointer", link: "https://leetcode.com/problems/copy-list-with-random-pointer/", solved: false, difficulty: "Hard" },
      { title: "Linked List Random Node", link: "https://leetcode.com/problems/linked-list-random-node/", solved: true, difficulty: "Medium" },
      { title: "Rearrange a Linked List", link: "https://leetcode.com/problems/rearrange-a-linked-list/", solved: false, difficulty: "Hard" },
      { title: "Delete Node in a Linked List", link: "https://leetcode.com/problems/delete-node-in-a-linked-list/", solved: true, difficulty: "Medium" },
      { title: "Sort List", link: "https://leetcode.com/problems/sort-list/", solved: false, difficulty: "Hard" },
      { title: "Detect Cycle in Linked List", link: "https://leetcode.com/problems/detect-cycle-in-linked-list/", solved: true, difficulty: "Medium" },
      { title: "Convert Sorted List to Binary Search Tree", link: "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/", solved: false, difficulty: "Hard" },
    ],
  },
  {
    category: "Dynamic Programming",
    problems: [
      { title: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/", solved: false, difficulty: "Easy" },
      { title: "Longest Increasing Subsequence", link: "https://leetcode.com/problems/longest-increasing-subsequence/", solved: true, difficulty: "Medium" },
      { title: "Coin Change", link: "https://leetcode.com/problems/coin-change/", solved: true, difficulty: "Hard" },
      { title: "House Robber", link: "https://leetcode.com/problems/house-robber/", solved: true, difficulty: "Medium" },
      { title: "House Robber II", link: "https://leetcode.com/problems/house-robber-ii/", solved: false, difficulty: "Medium" },
      { title: "Word Break", link: "https://leetcode.com/problems/word-break/", solved: true, difficulty: "Medium" },
      { title: "Unique Paths", link: "https://leetcode.com/problems/unique-paths/", solved: false, difficulty: "Medium" },
      { title: "Best Time to Buy and Sell Stock II", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/", solved: true, difficulty: "Medium" },
      { title: "Jump Game", link: "https://leetcode.com/problems/jump-game/", solved: true, difficulty: "Medium" },
      { title: "Partition Equal Subset Sum", link: "https://leetcode.com/problems/partition-equal-subset-sum/", solved: false, difficulty: "Hard" },
      { title: "Palindrome Partitioning", link: "https://leetcode.com/problems/palindrome-partitioning/", solved: true, difficulty: "Medium" },
      { title: "Longest Palindromic Subsequence", link: "https://leetcode.com/problems/longest-palindromic-subsequence/", solved: false, difficulty: "Hard" },
      { title: "Maximum Length of Pair Chain", link: "https://leetcode.com/problems/maximum-length-of-pair-chain/", solved: true, difficulty: "Medium" },
      { title: "Minimum Path Sum", link: "https://leetcode.com/problems/minimum-path-sum/", solved: true, difficulty: "Medium" },
      { title: "Target Sum", link: "https://leetcode.com/problems/target-sum/", solved: false, difficulty: "Hard" },
      { title: "Edit Distance", link: "https://leetcode.com/problems/edit-distance/", solved: true, difficulty: "Hard" },
      { title: "Decode Ways", link: "https://leetcode.com/problems/decode-ways/", solved: true, difficulty: "Medium" },
      { title: "Maximal Square", link: "https://leetcode.com/problems/maximal-square/", solved: false, difficulty: "Medium" },
      { title: "Integer Break", link: "https://leetcode.com/problems/integer-break/", solved: true, difficulty: "Medium" },
      { title: "Palindrome Partitioning II", link: "https://leetcode.com/problems/palindrome-partitioning-ii/", solved: false, difficulty: "Hard" },
    ],
  },
];

const ProblemsList = () => {
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState(problemCategories);  // State to hold the updated categories

  // Sorting problems based on difficulty
  const sortedProblems = categories.map((category) => ({
    ...category,
    problems: category.problems.sort((a, b) => {
      const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
      return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
    }),
  }));

  // Filtered problems based on difficulty, status, and search query
  const filteredProblems = sortedProblems
    .map((category) => ({
      ...category,
      problems: category.problems
        .filter(
          (problem) =>
            (difficultyFilter === "All" || problem.difficulty === difficultyFilter) &&
            (statusFilter === "All" || (statusFilter === "Solved" ? problem.solved : !problem.solved)) &&
            problem.title.toLowerCase().includes(searchQuery.toLowerCase())
        ),
    }))
    .filter((category) => category.problems.length > 0);

  // Handle star click to toggle solved status
  const toggleStatus = (categoryIndex, problemIndex) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].problems[problemIndex].solved = !updatedCategories[categoryIndex].problems[problemIndex].solved;
    setCategories(updatedCategories);  // Update state to trigger re-render
  };

  return (
    
    <section className="py-10 bg-black text-white">
      <h2 className="text-4xl font-extrabold text-center text-cyan-400 mb-12">Coding Problems</h2>

      {/* Search Bar */}
      <div className="text-center mb-8">
        <input
          type="text"
          placeholder="Search for a problem..."
          className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 w-1/3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="container mx-auto px-6 mb-8 flex justify-between items-center">
        {/* Status Filter Dropdown (Left side) */}
        <div className="w-1/3">
          <select
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Solved">Solved</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        {/* Difficulty Filter Dropdown (Right side) */}
        <div className="w-1/3">
          <select
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full"
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
          >
            <option value="All">All Levels</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
      </div>

      {/* Problems List */}
      <div className="container mx-auto px-6">
        {filteredProblems.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-3xl font-semibold text-cyan-400">{category.category}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.problems.map((problem, problemIndex) => (
                <div
                  key={problemIndex}
                  className={`relative bg-gradient-to-r from-${problem.difficulty === "Easy" ? "green" : problem.difficulty === "Medium" ? "yellow" : "red"}-500 to-${problem.difficulty === "Easy" ? "green" : problem.difficulty === "Medium" ? "yellow" : "red"}-700 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300`}
                >
                  {/* Problem Title with Link */}
                  <div className="flex justify-between items-center">
                    <a
                      href={problem.link}
                      className="text-lg font-semibold text-white hover:text-gray-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {problem.title}
                    </a>
                    {/* Star Icon */}
                    <span
                      className="ml-4 cursor-pointer text-xl text-yellow-500"
                      onClick={() => toggleStatus(categoryIndex, problemIndex)} // Toggle status for the individual problem
                    >
                      {problem.solved ? "⭐" : "☆"} {/* Filled star if solved, empty star if pending */}
                    </span>
                  </div>

                  {/* Status (solved/pending) */}
                  <div className="absolute left-2 top-2 text-xs font-medium text-white bg-black px-2 py-1 rounded-full">
                    {problem.solved ? "(Solved)" : "(Pending)"}
                  </div>

                  {/* Difficulty level */}
                  <div className="absolute right-2 top-2 text-xs font-medium text-white bg-black px-2 py-1 rounded-full">
                    {problem.difficulty}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <ProgressTracker/> */}
    </section>
  );
};

export default ProblemsList;
