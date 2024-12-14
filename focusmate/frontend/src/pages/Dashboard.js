// dashboard/Dashboard.js
import React, { useState } from "react";
import axios from "../axios"; // Your axios instance
import AddTaskButton from "./dashboard/AddTaskButton";
import TaskList from "./dashboard/TaskList";
import TaskSummary from "./dashboard/TaskSummary";

const Dashboard = () => {
  const [error, setError] = useState("");

  const addTask = async (taskData) => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage

    if (!token) {
      alert("Please login to add tasks");
      return;
    }

    try {
      const response = await axios.post(
        "/api/tasks", // This is correct, it will hit /api/tasks which will route to taskRoutes
        taskData, // The task data you're sending
        {
          headers: {
            Authorization: `Bearer ${token}`, // Attach the token here
          },
        }
      );
      console.log("Task added successfully:", response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Error adding task");
      console.error("Error adding task:", err.response?.data?.message || err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-blue-700 text-white py-6 px-8 shadow-md">
        <h1 className="text-4xl font-extrabold leading-tight">User Dashboard</h1>
        <p className="mt-2 text-lg font-medium text-blue-200">
          Organize and track your tasks efficiently.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Add Task Section */}
        <div className="bg-purple-100 col-span-1 bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800">Add a New Task</h2>
          <p className="text-sm text-gray-600 mb-6">
            Add new tasks to your to-do list and keep track of them.
          </p>
          <div className="bg-white text-white p-4 rounded-lg shadow-inner gap-4">
            <AddTaskButton addTask={addTask} />
          </div>
        </div>

        {/* Tasks and Summary Section */}
        <div className="col-span-2 flex flex-col gap-8">
          {/* Task List */}
          <div className="bg-purple-100 shadow-xl rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Tasks</h2>
            <TaskList />
          </div>

          {/* Task Summary */}
          <div className="bg-purple-100 shadow-xl rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Task Summary</h2>
            <TaskSummary />
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && <div className="text-red-500 text-center">{error}</div>}
    </div>
  );
};

export default Dashboard;
