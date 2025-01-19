import React from "react";
import { useForm } from "../hooks/useForm";

export default function TodoAdd({ onNewState }) {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };
    onNewState(newTodo);
    onResetForm();
  };
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Que hay que hacer?"
          className=" form-control"
          value={description}
          name="description"
          onChange={onInputChange}
        />
        <button type="submit" className="btn btn-outline-primary mt-1">
          Agregar
        </button>
      </form>
    </>
  );
}
