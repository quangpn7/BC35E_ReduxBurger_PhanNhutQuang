const stateDefault = {
  burger: {
    salad: 1,
    cheese: 1,
    beef: 1,
  },
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
  total: 85,
};

export const BurgerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHANGE_AMOUNT": {
      let { payload, ingredient } = action;
      //
      if (
        (payload === -1 && state.burger[ingredient] < 1) ||
        (payload === 1 && state.burger[ingredient] > 4)
      ) {
        return { ...state };
      }
      let cloneState = { ...state.burger };
      cloneState[ingredient] += payload;
      let total = state.total;
      total += payload * state.menu[ingredient];

      let burger = cloneState;

      return { ...state, burger, total };
    }
  }
  return { ...stateDefault };
};
