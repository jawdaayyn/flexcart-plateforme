import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./auth/userSlice";
import { userApi } from "./auth/userActions";
import { cartApi } from "./cart";

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, cartApi.middleware),
});

export default store;
