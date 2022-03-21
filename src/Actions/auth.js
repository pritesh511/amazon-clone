export const setAuth = (setUser) => {
  return {
    type: "SET_USER",
    payload: {
      user: setUser,
    },
  };
};
