import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productsReducer from "./productsSlice";
import categoriesReducer from "./categoriesSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  },
});

export default store;
