import React from "react";
import TaskBoard from "../TaskBoard";
import "./TaskContainer.css";

/*
 * The TaskContainer React Hook
 */

const TaskContainer = () => {
  const style = {
    padding: "30px",
    paddingTop: "5px",
  };

  return (
    <div style={style}>
      <h1>To-do Task Container Board</h1>
      <TaskBoard />
    </div>
  );
};

export default TaskContainer;
