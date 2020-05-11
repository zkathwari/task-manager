import { todoList } from "../data/todoList";
//todosReducer

export const todosReducer = (state = { todoList }, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          action.payload.name !== "" && action.payload,
        ],
      };
    case "UPDATE_CARD":
      return { ...state, todoList: [...state.todoList, action.payload] };
    case "DELETE_CARD":
      return { ...state, todoList: action.payload };
    default:
      return state;
  }
};
