/*
 * The TaskContainer Board React Hook
 */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskColumn from "../TaskColumn";
/*
 * To-do's to be displayed on TaskContainer Board
 */

const TaskBoard = () => {
  const [isLoading, setIsloading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [draggedOverCol, setDraggedOverCol] = useState(0);
  const { todoList, columns } = useSelector((state) => ({
    ...state.todosReducer,
    ...state.columnsReducer,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("todoList use effect", todoList);
    Array.isArray(todoList) && setTodos(todoList);
    setIsloading(false);
  }, [todoList]);

  function addNewCard(cardProps) {
    console.log("attempting to add new card:", cardProps);
    dispatch({
      type: "ADD_CARD",
      payload: cardProps,
    });
  }

  //this is called when a TaskContainer card is dragged over a column (called by column)
  function handleOnDragEnter(e, stageValue) {
    setDraggedOverCol(stageValue);
  }

  //this is called when a TaskContainer card dropped over a column (called by card)
  function handleOnDragEnd(e, todo) {
    const updatedTodos = todos.slice(0);
    updatedTodos.find((todoObject) => {
      return todoObject.name === todo.name;
    }).todo_stage = draggedOverCol;

    setTodos(updatedTodos);
  }

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
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
    </div>
  );
};

export default TaskBoard;
