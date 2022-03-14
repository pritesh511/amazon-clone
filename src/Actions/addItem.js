export const addItem = (description, price, rating, image) => {
  return {
    type: "ADD_ITEM",
    payload: {
      id: new Date().getTime().toString(),
      description: description,
      price: price,
      rating: rating,
      image: image,
    },
  };
};

export const removeItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: {
      id: id,
    },
  };
};
