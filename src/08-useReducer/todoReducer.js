export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add state":
      return [...initialState, action.payload];
    case "[TODO] Remove state":
      return initialState.filter((state) => state.id !== action.payload);
    default:
      return initialState;
  }
};
