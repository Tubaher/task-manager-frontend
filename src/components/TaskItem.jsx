import React from "react";
import { completeTask, deleteTask } from "../api";

const TaskItem = ({ task }) => {
  const handleComplete = async () => {
    await completeTask(task.id);
    window.location.reload();
  };

  const handleDelete = async () => {
    await deleteTask(task.id);
    window.location.reload();
  };

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.completed ? "Completed" : "Incomplete"}</p>
      <button onClick={handleComplete}>Complete</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
