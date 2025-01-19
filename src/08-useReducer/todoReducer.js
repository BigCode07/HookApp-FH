export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "[TODO] Add state":
      return [...state, action.payload];

    case "[TODO] Remove state":
      return state.filter((todo) => todo.id !== action.payload);

    case "[TODO] Toggle state":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );

    default:
      return state;
  }
};
