import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  const storedState = localStorage.getItem("state");
  return storedState ? JSON.parse(storedState) : [];
};
export const useTodos = () => {
  const [state, dispatch] = useReducer(todoReducer, [], init);

  //lo que se esta realizando aca es la operacion para guardar los elementos una vez que se cierra la pagina
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const handleNewTodo = (todo) => {
    dispatch({
      type: "[TODO] Add state",
      payload: todo,
    });
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove state",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle state",
      payload: id,
    });
  };

  return {
    state,
    todosCount: state.length,
    pendingTodosCount: state.filter((state) => !state.done).length,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
  };
};
