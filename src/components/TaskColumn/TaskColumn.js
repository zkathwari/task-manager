// The Task Column React Hook

import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskCard from "../TaskCard";
import PromptInput from "../PromptInput/PromptInput";
import "./TaskColumn.scss";
import "../TaskContainer/Button.scss";

const TaskColumn = ({
  todos,
  onDragEnd,
  onDragEnter,
  stage,
  name,
  addNewCard,
}) => {
  const [mouseIsHovering, setMouseIsHovering] = useState(false);
  const [cardName, setCardName] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);
  const { todoList } = useSelector((state) => ({ ...state.todosReducer }));
  const dispatch = useDispatch();

  function generateTaskCards() {
    return todos.slice(0).map((todo) => {
      return (
        <TaskCard
          todo={todo}
          key={todo.name}
          onDragEnd={onDragEnd}
          deleteCard={handleDeleteCard}
        />
      );
    });
  }

  function handleDeleteCard(e, todo) {
    dispatch({
      type: "DELETE_CARD",
      payload: todoList.filter((value) => {
        return value.name !== todo.name;
      }),
    });
  }

  function handleSaveCard() {
    setShowPrompt(false);
    addNewCard({
      name: cardName,
      todo_stage: stage,
    });
    //reset name
    setCardName("");
  }

  return (
    <div
      className={`task-column ${
        mouseIsHovering
          ? "task-column--bg-color-first"
          : "task-column--bg-color-second"
      }`}
      onDragEnter={(e) => {
        setMouseIsHovering(true);
        onDragEnter(e, stage);
      }}
      onDragExit={(e) => {
        setMouseIsHovering(false);
      }}
    >
      <h4>
        {name} ({todos.length})
      </h4>
      {generateTaskCards()}
      <br />
      <Fragment>
        {showPrompt && (
          <PromptInput
            setValue={(e) => setCardName(e.target.value)}
            handleAdd={handleSaveCard}
            buttonText={"Save"}
          />
        )}
        <button className='button' onClick={() => setShowPrompt(true)}>
          + Add a card
        </button>
      </Fragment>
    </div>
  );
};

export default TaskColumn;
