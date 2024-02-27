export const actions = {
  UPDATE_VALUES: "UPDATE_VALUES",
  SET: "SET",
};

export function reducer(state, action) {
  switch (action.type) {
    case actions.UPDATE_VALUES:
      return {
        ...state,
        ...action.payload,
      };
    case actions.SET:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}
