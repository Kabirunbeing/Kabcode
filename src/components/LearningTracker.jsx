import React, { useState } from 'react';

const LearningTracker = () => {
  const [learningPaths, setLearningPaths] = useState([
    {
      id: 1,
      topic: "Dynamic Programming",
      completedProblems: 7,
      totalProblems: 20,
      difficulty: "Hard",
      technologies: ["JavaScript", "Algorithms"]
    }
  ]);

  const [editingPath, setEditingPath] = useState(null);

  // Create
  const createLearningPath = (newPath) => {
    const path = {
      ...newPath,
      id: Date.now(),
      completedProblems: 0
    };
    setLearningPaths([...learningPaths, path]);
  };

  // Update
  const updateLearningPath = (updatedPath) => {
    setLearningPaths(learningPaths.map(path => 
      path.id === updatedPath.id ? updatedPath : path
    ));
    setEditingPath(null);
  };

  // Delete
  const deleteLearningPath = (pathId) => {
    setLearningPaths(learningPaths.filter(path => path.id !== pathId));
  };

  // Progress Update
  const updateProgress = (pathId, increment) => {
    setLearningPaths(learningPaths.map(path => 
      path.id === pathId 
        ? {...path, completedProblems: Math.max(0, path.completedProblems + increment)}
        : path
    ));
  };

  return (
    <div className="bg-black text-white p-8">
      <h2 className="text-4xl text-cyan-400 text-center mb-8">
        Learning Progress Tracker
      </h2>

      {/* Create New Path Modal/Form */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="text-2xl text-cyan-400 mb-4">
          {editingPath ? "Edit Learning Path" : "Create New Learning Path"}
        </h3>
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const pathData = {
              topic: formData.get('topic'),
              totalProblems: parseInt(formData.get('totalProblems')),
              difficulty: formData.get('difficulty'),
              technologies: formData.get('technologies').split(',').map(t => t.trim())
            };

            editingPath 
              ? updateLearningPath({...pathData, id: editingPath.id}) 
              : createLearningPath(pathData);
            
            e.target.reset();
          }}
        >
          <div className="grid grid-cols-2 gap-4">
            <input 
              name="topic" 
              placeholder="Learning Topic" 
              defaultValue={editingPath?.topic}
              required 
              className="bg-gray-700 p-2 rounded"
            />
            <input 
              name="totalProblems" 
              type="number" 
              placeholder="Total Problems" 
              defaultValue={editingPath?.totalProblems}
              required 
              className="bg-gray-700 p-2 rounded"
            />
            <select 
              name="difficulty" 
              defaultValue={editingPath?.difficulty}
              className="bg-gray-700 p-2 rounded"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
            <input 
              name="technologies" 
              placeholder="Technologies (comma-separated)" 
              defaultValue={editingPath?.technologies?.join(', ')}
              className="bg-gray-700 p-2 rounded"
            />
          </div>
          <button 
            type="submit" 
            className="mt-4 w-full bg-cyan-500 p-2 rounded"
          >
            {editingPath ? "Update Path" : "Create Path"}
          </button>
        </form>
      </div>

      {/* Learning Paths List */}
      <div className="space-y-4">
        {learningPaths.map(path => (
          <div 
            key={path.id} 
            className="bg-gray-800 p-6 rounded-lg flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl text-cyan-400">{path.topic}</h3>
              <p>Progress: {path.completedProblems}/{path.totalProblems}</p>
              <p>Difficulty: {path.difficulty}</p>
              <p>Technologies: {path.technologies.join(', ')}</p>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={() => updateProgress(path.id, 1)}
                className="bg-green-500 p-2 rounded"
              >
                +1 Problem
              </button>
              <button 
                onClick={() => updateProgress(path.id, -1)}
                className="bg-red-500 p-2 rounded"
              >
                -1 Problem
              </button>
              <button 
                onClick={() => setEditingPath(path)}
                className="bg-yellow-500 p-2 rounded"
              >
                Edit
              </button>
              <button 
                onClick={() => deleteLearningPath(path.id)}
                className="bg-red-700 p-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningTracker;