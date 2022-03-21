const intialState = {
  user: null,
};

const authReducers = (state = intialState, action) => {
  switch (action.type) {
    case "SET_USER":
      const { user } = action.payload;
      return {
        ...state.user,
        user: user,
      };
    default:
      return state;
  }
};

export default authReducers;
