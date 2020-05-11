// Task Container React Hook

import React from "react";
import TaskBoard from "../TaskBoard";
import "./TaskContainer.scss";

const TaskContainer = () => {
  return (
    <div className='task-container'>
      <h1>Task Manager Board</h1>
      <TaskBoard />
    </div>
  );
};

export default TaskContainer;
