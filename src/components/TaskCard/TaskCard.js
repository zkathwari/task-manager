/*
 * The TaskContainer Board Card Hook
 */
import React, { useState } from "react";
import { Confirmation } from "../Confirmation";

const TaskCard = (props) => {
  const { project, onDragEnd, deleteCard } = props;
  const [collapsed, setCollapsed] = useState(true);
  const [confirm, setConfirm] = useState(false);

  const cardStyle = {
    backgroundColor: "#f9f7f7",
    paddingLeft: "0px",
    paddingTop: "5px",
    paddingBottom: "5px",
    marginLeft: "0px",
    marginRight: "5px",
    marginBottom: "5px",
  };

  const buttonStyle = {
    margin: "5px",
  };

  return (
    <div
      style={cardStyle}
      draggable={true}
      onDragEnd={(e) => {
        onDragEnd(e, project);
      }}
    >
      {!confirm && (
        <button style={buttonStyle} onClick={() => setConfirm(true)}>
          &#10007; Delete
        </button>
      )}
      {confirm && (
        <Confirmation
          remove={(e) => deleteCard(e, project)}
          cancel={() => setConfirm(false)}
        />
      )}
      <div>
        <h4>{project.name}</h4>
      </div>
      <div
        style={{ width: "100%" }}
        onClick={(e) => {
          setCollapsed(!collapsed);
        }}
      ></div>
    </div>
  );
};

export default TaskCard;
