import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./auth/userSlice";
import { userApi } from "./auth/userActions";

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export default store;
