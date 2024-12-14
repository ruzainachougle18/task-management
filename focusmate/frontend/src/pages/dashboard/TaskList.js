import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const TaskList = () => {
  const { tasks, removeTask, toggleComplete } = useContext(TaskContext);

  return (
    <div className="mt-4">
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between bg-white shadow p-4 rounded-lg"
          >
            {/* Task Name with Completion Toggle */}
            <div>
              <span
                className={`text-lg ${
                  task.completed ? "line-through text-gray-500" : "text-gray-800"
                }`}
              >
                {task.name}
              </span>
            </div>

            {/* Buttons */}
            <div className="space-x-2">
              {/* Toggle Completion Button */}
              <button
                className={`px-3 py-1 rounded ${
                  task.completed
                    ? "bg-green-200 text-green-800"
                    : "bg-blue-200 text-blue-800"
                }`}
                onClick={() => toggleComplete(task.id)}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>

              {/* Delete Button */}
              <button
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => removeTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
