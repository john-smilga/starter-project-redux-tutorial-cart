import { GET_TOTALS, CLEAR_CART, INCREASE, DECREASE, REMOVE } from "./action";

const reducer = (state, action) => {
  const { type, payload } = action;
  if (type === GET_TOTALS) {
    console.log(state);
    let { total, amount } = state.cart.reduce(
      (acc, item) => {
        const { price, amount } = item;
        const itemTotal = price * amount;
        acc.total += itemTotal;
        acc.amount += amount;
        return acc;
      },
      { total: 0, amount: 0 }
    );
    total = parseFloat(total.toFixed(2));
    return {
      ...state,
      total,
      amount,
    };
  }
  if (type === CLEAR_CART) {
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
