import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]); // State to store tasks
  const [hasUsedTrial, setHasUsedTrial] = useState(false); // Tracks trial usage

  // Add a new task
  const addTask = (task) => {
    const newTask = {
      id: Date.now(), // Use timestamp as a simple unique ID
      name: task.name, // Task name
      completed: false, // Default completion status
    };
    setTasks([...tasks, newTask]); // Update the task list
  };

  // Remove a task by its ID
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  

  // Toggle the completion status of a task
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Mark the trial as used
  const markTrialUsed = () => {
    setHasUsedTrial(true);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks, // Task list
        addTask, // Function to add tasks
        removeTask, // Function to delete tasks
        toggleComplete, // Function to toggle task completion
        hasUsedTrial, // State to check trial usage
        markTrialUsed, // Function to update trial usage
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
