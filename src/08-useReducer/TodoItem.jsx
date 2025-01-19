import React from "react";

export default function TodoItem({ sta }) {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{sta.description}</span>
      <button className="btn btn-danger">Borrar</button>
    </li>
  );
}
