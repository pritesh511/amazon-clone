const InitialState = { data: [] };

const addItemReducers = (state = InitialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const { id, description, price, rating, image } = action.payload;
      return {
        data: [
          ...state.data,
          {
            id: id,
            description: description,
            price: price,
            rating: rating,
            image: image,
          },
        ],
      };
    case "REMOVE_ITEM":
      const newData = state.data.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        data: newData,
      };
    default:
      return state;
  }
};

export default addItemReducers;
