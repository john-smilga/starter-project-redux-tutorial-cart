import { CLEAR_CART, INCREASE, DECREASE, REMOVE } from "./action";

const reducer = (state, action) => {
  const { type, payload } = action;
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    };
  }
  if (type === INCREASE) {
    let newCart = state.cart.map((item) => {
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
  if (type === DECREASE) {
    let newCart = [];
    if (payload.amount === 1) {
      newCart = state.cart.filter((item) => item.id !== payload.id);
    } else {
      newCart = state.cart.map((item) => {
        if (item.id === payload.id) {
          item = { ...item, amount: item.amount - 1 };
        }
        return item;
      });
    }
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
