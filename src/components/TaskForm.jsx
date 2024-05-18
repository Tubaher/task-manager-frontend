import React, { useState } from "react";
import { createTask } from "../api";

const TaskForm = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(title);
    setTitle("");
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} method="post" action="/">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
