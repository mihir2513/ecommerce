import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Cart/CartSlice";
import { userReducer } from "./User/UserSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});
