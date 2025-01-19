import React from "react";

export default function TodoItem({ sta, onDeleteState, onToggleState }) {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          sta.done && "text-decoration-line-through"
        }`}
        onClick={() => onToggleState(sta.id)}
      >
        {sta.description}
      </span>
      <button className="btn btn-danger" onClick={() => onDeleteState(sta.id)}>
        Borrar
      </button>
    </li>
  );
}
