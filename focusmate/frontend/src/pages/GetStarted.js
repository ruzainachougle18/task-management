import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For redirection
import { TaskContext } from "../context/TaskContext";

const GetStarted = () => {
  const { tasks, addTask } = useContext(TaskContext);
  const [taskInput, setTaskInput] = useState("");
  const [isTrialUsed, setIsTrialUsed] = useState(false);
  const navigate = useNavigate(); // For navigation to login

  // Check if trial has already been used
  useEffect(() => {
    const trialStatus = localStorage.getItem("trialUsed");
    if (trialStatus === "true") {
      setIsTrialUsed(true);
    }
  }, []);

  const handleAddTask = () => {
    if (isTrialUsed) {
      alert("Free trial expired! Please log in to continue using this feature.");
      navigate("/login"); // Redirect to login
      return;
    }

    if (taskInput.trim()) {
      addTask({ id: Date.now(), name: taskInput.trim() }); // Add the task
      setTaskInput(""); // Clear input

      // Mark the trial as used in localStorage
      localStorage.setItem("trialUsed", "true");
      setIsTrialUsed(true);
      alert("You've used your free trial. Please log in for continued access.");
    } else {
      alert("Task cannot be empty!"); // Notify if input is empty
    }
  };

  return (
    <div className="min-h-screen bg-[#EBEAFF] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">FocusMate</h1>
        <p className="text-lg text-gray-600 mb-6">
          Add your tasks and start your productivity journey!
        </p>

        {isTrialUsed ? (
          <div className="text-red-500 font-semibold mb-4">
            Free trial expired! Log in to continue using this feature.
          </div>
        ) : (
          <div className="flex items-center justify-between gap-2 mb-6">
            {/* Task Input */}
            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder="Enter a task..."
              className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring focus:ring-blue-400"
            />
            <button
              onClick={handleAddTask}
              className="bg-[#2c3e50] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#0093af] transition duration-300"
            >
              Add Task
            </button>
          </div>
        )}

        {/* Task List */}
        {tasks.length > 0 && (
          <ul className="task-list space-y-2">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="p-2 bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-lg text-sm font-medium shadow-md"
              >
                {task.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default GetStarted;
