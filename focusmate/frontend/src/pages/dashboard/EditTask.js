import React, { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const EditTask = ({ taskId, currentName }) => {
  const { tasks, addTask } = useContext(TaskContext);
  const [newTaskName, setNewTaskName] = useState(currentName);

  const handleSaveEdit = () => {
    // Update task name in context
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, name: newTaskName } : task
    );
    addTask(updatedTasks); // Update tasks with edited task name
  };

  return (
    <div>
      <input
        type="text"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button onClick={handleSaveEdit}>Save</button>
    </div>
  );
};

export default EditTask;
