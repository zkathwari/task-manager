// Task Board React Hook

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskColumn from "../TaskColumn";
import PromptInput from "../PromptInput";
import "./TaskBoard.scss";

const TaskBoard = () => {
  const [isLoading, setIsloading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [draggedOverCol, setDraggedOverCol] = useState(0);
  const { todoList, columns } = useSelector((state) => ({
    ...state.todosReducer,
    ...state.columnsReducer,
  }));
  const [listName, setListName] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    Array.isArray(todoList) && setTodos(todoList);
    setIsloading(false);
  }, [todoList]);

  function addNewCard(cardProps) {
    dispatch({
      type: "ADD_CARD",
      payload: cardProps,
    });
  }

  //called when a Task card is dragged over a column (called by column)
  function handleOnDragEnter(e, stageValue) {
    setDraggedOverCol(stageValue);
  }

  //called when a Task card dropped over a column (called by card)
  function handleOnDragEnd(e, todo) {
    const updatedTodos = todos.slice(0);
    updatedTodos.find((todoObject) => {
      return todoObject.name === todo.name;
    }).todo_stage = draggedOverCol;

    dispatch({
      type: "UPDATE_CARD",
      payload: updatedTodos,
    });

    // setTodos(updatedTodos);
    setShowPrompt(false);
  }

  function handleAddColumn() {
    let columnFirst = columns.length === 0;
    let initialColumn = columnFirst && { name: listName, stage: 0 };
    let nextStage = columnFirst
      ? initialColumn.stage + 1
      : columns[columns.length - 1].stage + 1;
    dispatch({
      type: "ADD_COLUMN",
      payload: columnFirst
        ? initialColumn
        : { name: listName, stage: nextStage },
    });
    setShowPrompt(false);
  }

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className='task-board'>
      {columns.map((column) => {
        return (
          <TaskColumn
            name={column.name}
            stage={column.stage}
            todos={todos.filter((todo) => {
              return parseInt(todo.todo_stage, 10) === column.stage;
            })}
            onDragEnter={handleOnDragEnter}
            onDragEnd={handleOnDragEnd}
            key={column.stage}
            addNewCard={addNewCard}
          />
        );
      })}
      {columns.length > 0
        ? !showPrompt && (
            <button
              className='task-board__button'
              onClick={() => setShowPrompt(true)}
            >
              + Add another list
            </button>
          )
        : !showPrompt && (
            <button
              className='task-board__button'
              onClick={() => setShowPrompt(true)}
            >
              + Start by adding a list
            </button>
          )}
      {showPrompt && (
        <PromptInput
          setValue={(e) => setListName(e.target.value)}
          handleAdd={handleAddColumn}
          buttonText={"Add"}
          cancelButtonText={"Cancel"}
          isListName={true}
          placeHolder={"Add List Name"}
          cancelButton={() => setShowPrompt(false)}
        />
      )}
    </div>
  );
};

export default TaskBoard;
