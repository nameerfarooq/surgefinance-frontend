import { configureStore } from "@reduxjs/toolkit";
import connectionReducer from "./features/connectionSlice";
import modalReducer from "./features/modalSlice";
import themeReducer from "./features/themeSlice";

const store = configureStore({
  reducer: {
    connection: connectionReducer,
    modal: modalReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export default store;
