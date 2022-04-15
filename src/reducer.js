import { CLEAR_CART } from "./action";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    };
  }
  if (type === INCREASE) {
    const newCart = state.cart.map((item) => {
      if (item.id === payload.id) {
        item = { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return {
      ...state,
      cart: newCart,
    };
  }
  if (type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    };
  }
  return state;
};

export default reducer;
