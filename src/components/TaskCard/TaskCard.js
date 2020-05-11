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
          &#10006;
        </button>
      )}
      {confirm && (
        <Confirmation
          remove={(e) => deleteCard(e, todo)}
          cancel={() => setConfirm(false)}
        />
      )}
      <div>
        <p className='task-card__name'>{todo.name}</p>
      </div>
    </div>
  );
};

export default TaskCard;
