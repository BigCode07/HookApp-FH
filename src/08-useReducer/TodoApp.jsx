import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() + 100,
    description: "Recolectar la piedra filosofal",
    done: false,
  },
  {
    id: new Date().getTime() + 200,
    description: " Recolectar otra cosa",
    done: true,
  },
];

export default function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (state) => {
    const action = {
      type: "[TODO] Add todo",
      payload: state,
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
          <TodoList state={state} />
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
