import { todoList } from "../data/todoList";
//todosReducer
export const todosReducer = (state = { todoList }, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return {
        todoList: [
          ...state.todoList,
          action.payload.name !== "" && action.payload,
        ],
      };

    case "UPDATE_CARD":
      return {
        todoList: action.payload,
      };
    case "DELETE_CARD":
      return { todoList: action.payload };
    default:
      return state;
  }
};
