import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import userReducer from "./useSlice";
import postReducer from "./postSlice";
const persistConfig = {
  key: "infoUser",
  storage,
};
const persistConfigPost = {
  key: "Post",
  storage,
};
const persistedReducer = persistReducer(persistConfig, userReducer);
const persistedReducerPost = persistReducer(persistConfigPost, postReducer);
export const store = configureStore({
  reducer: {
    user: persistedReducer,
    post: persistedReducerPost,
  },
  middleware: [thunk],
});
export const persistor = persistStore(store);
