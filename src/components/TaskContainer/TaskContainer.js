// Task Container React Hook

import React from "react";
import TaskBoard from "../TaskBoard";
import "./TaskContainer.scss";

const TaskContainer = () => {
  return (
    <div className='task-container'>
      <h1 className='task-container__title '>Task Manager&copy;</h1>
      <TaskBoard />
    </div>
  );
};

export default TaskContainer;
