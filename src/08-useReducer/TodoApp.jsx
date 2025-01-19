import React, { useEffect } from "react";
import { todoReducer } from "./todoReducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("state")) || [];
};

export default function TodoApp() {
  const { state, handleNewTodo, handleDeleteTodo, handleToggleTodo } =
    todoReducer;

  //lo que se esta realizando aca es la operacion para guardar los elementos una vez que se cierra la pagina
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <div>
      <h1>
        Todo App : 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {" "}
          <TodoList
            state={state}
            onDeleteState={(id) => handleDeleteTodo(id)}
            onToggleState={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewState={handleNewTodo} />
        </div>
      </div>
    </div>
  );
}
