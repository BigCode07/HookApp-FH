import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ state = [], onDeleteState, onToggleState }) {
  return (
    <>
      <ul className=" list-group">
        {state.map((sta) => (
          <TodoItem
            key={sta.id}
            sta={sta}
            onDeleteState={onDeleteState}
            onToggleState={onToggleState}
          />
        ))}
      </ul>
    </>
  );
}
