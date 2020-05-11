// Task Card Rect Hook

import React, { useState } from "react";
import { Confirmation } from "../Confirmation";
import "./TaskCard.scss";

const TaskCard = ({ todo, onDragEnd, deleteCard }) => {
  const [confirm, setConfirm] = useState(false);

  return (
    <div
      className='task-card'
      draggable={true}
      onDragEnd={(e) => {
        onDragEnd(e, todo);
      }}
    >
      {!confirm && (
        <button className='task-card__button' onClick={() => setConfirm(true)}>
          &#10007; Delete
        </button>
      )}
      {confirm && (
        <Confirmation
          remove={(e) => deleteCard(e, todo)}
          cancel={() => setConfirm(false)}
        />
      )}
      <div>
        <h4>{todo.name}</h4>
      </div>
    </div>
  );
};

export default TaskCard;
