export const [state, dispatch] = useReducer(todoReducer, initialState, init);

export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add state":
      return [...initialState, action.payload];
    case "[TODO] Remove state":
      return initialState.filter((state) => state.id !== action.payload);
    case "[TODO] Toggle state":
      return initialState.map((state) => {
        if (state.id === action.payload) {
          return {
            ...state,
            done: !state.done,
          };
        }
        return state;
      });
    default:
      return initialState;
  }
};

export const handleNewTodo = (todo) => {
  dispatch({
    type: "[TODO] Add state",
    payload: todo,
  });
};

export const handleDeleteTodo = (id) => {
  dispatch({
    type: "[TODO] Remove state",
    payload: id,
  });
};

export const handleToggleTodo = (id) => {
  dispatch({
    type: "[TODO] Toggle state",
    payload: id,
  });
};
