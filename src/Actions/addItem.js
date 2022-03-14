export const addItem = (id, description, price, rating, image) => {
  return {
    type: "ADD_ITEM",
    payload: {
      id: id,
      description: description,
      price: price,
      rating: rating,
      image: image,
    },
  };
};

export const removeItem = () => {
  return {
    type: "REMOVE_ITEM",
  };
};
