import { configureStore } from "@reduxjs/toolkit";
import { BurgerReducer } from "./BurgerReducer/BurgerReducer";

export const store = configureStore({
  //State zone
  reducer: {
    //burger state
    burgerReducer: BurgerReducer,
  },
});
