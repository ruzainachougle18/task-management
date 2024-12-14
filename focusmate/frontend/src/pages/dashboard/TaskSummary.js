import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const TaskSummary = () => {
  const { tasks } = useContext(TaskContext);

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div>
      <p>Total tasks: {totalTasks}</p>
      <p>Completed tasks: {completedTasks}</p>
    </div>
  );
};

export default TaskSummary;
