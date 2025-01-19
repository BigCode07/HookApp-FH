import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: "Recolectar la piedra del alma",
  //   done: false,
  // },
  // {
  //   id: new Date().getTime() + 100,
  //   description: "Recolectar la piedra filosofal",
  //   done: false,
  // },
  // {
  //   id: new Date().getTime() + 200,
  //   description: " Recolectar otra cosa",
  //   done: true,
  // },
];

const init = () => {
  return JSON.parse(localStorage.getItem("state")) || [];
};

export default function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState, init);

  //lo que se esta realizando aca es la operacion para guardar los elementos una vez que se cierra la pagina
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add state",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] Remove state",
      payload: id,
    };
    dispatch(action);
  };

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
