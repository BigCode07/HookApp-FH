import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import { useTodos } from "../hooks";

export default function TodoApp() {
  const {
    state,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodos();

  return (
    <div>
      <h1>
        Todo App : {todosCount}, <small>pendientes: {pendingTodosCount}</small>
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
