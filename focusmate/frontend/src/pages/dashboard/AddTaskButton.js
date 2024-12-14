import React, { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const AddTaskButton = () => {
  const { addTask, hasUsedTrial, markTrialUsed } = useContext(TaskContext);
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim()) {
      if (hasUsedTrial) {
        alert("Trial expired! Please log in.");
        // redirect logic can go here (e.g., navigate to login)
      } else {
        addTask({ id: Date.now(), name: taskInput.trim(), completed: false });
        setTaskInput("");
        markTrialUsed(); // Mark trial as used
        alert("Trial used! Please log in.");
      }
    } else {
      alert("Task cannot be empty.");
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter task"
        className="w-full p-3 text-gray-600 rounded-md border border-none focus:outline-none focus:ring-2 focus:ring-purple-200"
       />
      <button
        onClick={handleAddTask}
        className="w-full bg-blue-900 p-3 rounded-md shadow-lg focus:outline-none hover:bg-blue-800 transition duration-300"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTaskButton;
