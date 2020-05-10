/*
 * The TaskContainer Board Column React Hook
 */
import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskCard from "../TaskCard";

const TaskColumn = (props) => {
  const { todos, onDragEnd, onDragEnter, stage, name, addNewCard } = props;
  const [mouseIsHovering, setMouseIsHovering] = useState(false);
  const [cardName, setCardName] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);
  const { todoList } = useSelector((state) => ({ ...state.todoReducer }));
  const dispatch = useDispatch();

  function generateTaskCards() {
    return todos.slice(0).map((project) => {
      return (
        <TaskCard
          project={project}
          key={project.name}
          onDragEnd={onDragEnd}
          deleteCard={handleDeleteCard}
        />
      );
    });
  }

  function handleDeleteCard(e, project) {
    dispatch({
      type: "DELETE_CARD",
      payload: todoList.filter((value) => {
        return value.name !== project.name;
      }),
    });

    console.log("e, project, modifiedTodos", e, project);
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

  // column style
  const columnStyle = {
    display: "inline-block",
    verticalAlign: "top",
    marginRight: "5px",
    marginBottom: "5px",
    paddingLeft: "5px",
    paddingTop: "0px",
    width: "230px",
    textAlign: "center",
    backgroundColor: mouseIsHovering ? "#d3d3d3" : "#f0eeee",
  };
  // button style
  const buttonStyle = {
    backgroundColor: "transparent",
    border: "none",
    padding: "0 !important",
    fontSize: "20px",
    fontFamily: "arial, sans-serif",
    color: "#069",
    textDecoration: "none",
    cursor: "pointer",
    margin: "15px 0",
  };
  //promt elements container
  const promptContainer = {
    borderTop: "2px solid #ffffff",
    borderBottom: "2px solid #ffffff",
  };
  //prompt text area
  const promptTextArea = {
    width: "200px",
    marginTop: "10px",
    height: "60px",
  };

  return (
    <div
      style={columnStyle}
      onDragEnter={(e) => {
        setMouseIsHovering(true);
        onDragEnter(e, stage);
      }}
      onDragExit={(e) => {
        setMouseIsHovering(false);
      }}
    >
      <h4>
        {stage}. {name} ({todos.length})
      </h4>
      {generateTaskCards()}
      <br />
      <Fragment>
        {showPrompt && (
          <div style={promptContainer}>
            <textarea
              style={promptTextArea}
              onChange={(e) => setCardName(e.target.value)}
              placeholder='Enter name for this card'
            ></textarea>
            <button style={buttonStyle} onClick={handleSaveCard}>
              Save
            </button>
          </div>
        )}
        <button style={buttonStyle} onClick={() => setShowPrompt(true)}>
          + Add a card
        </button>
      </Fragment>
    </div>
  );
};

export default TaskColumn;
