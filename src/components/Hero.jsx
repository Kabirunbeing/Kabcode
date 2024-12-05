import { useState, useEffect } from "react";

const HeroSection = () => {
  const subText = "This app is being made by Kabeer to solve Leetcode challenges.";
  const [typedText, setTypedText] = useState(""); // State to hold typed text
  const [index, setIndex] = useState(0); // Index to keep track of which character to show

  useEffect(() => {
    if (index < subText.length) {
      // Simulate typing effect
      const typingInterval = setTimeout(() => {
        setTypedText((prev) => prev + subText[index]); // Add one character at a time
        setIndex(index + 1); // Move to the next character
      }, 100); // Typing speed: 100ms between each letter

      // Clear the timeout on cleanup
      return () => clearTimeout(typingInterval);
    }
  }, [index]); // Runs whenever index changes

  return (
    <section className="relative bg-black text-white text-center py-20 h-[80vh] flex flex-col items-center justify-center">
      {/* Main Content */}
      <div className="relative z-10 px-6 sm:px-12 lg:px-20">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 opacity-90">
          Welcome to KabCode
        </h1>

        {/* Subtext with Typing Animation */}
        <p className="text-xl sm:text-2xl lg:text-3xl mb-8 opacity-90">
          {typedText}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-6">
          <button className="bg-cyan-500 text-gray-900 px-8 py-4 font-semibold rounded-lg transition-all transform hover:bg-cyan-600 hover:scale-105 w-full sm:w-auto">
            Start Solving Problems
          </button>
          <button className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-gray-900 px-8 py-4 font-semibold rounded-lg transition-all transform hover:scale-105 w-full sm:w-auto">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
