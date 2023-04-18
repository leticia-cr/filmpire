import { configureStore } from "@reduxjs/toolkit";

import { tmbdApi } from "../services/TMDB";
import genreOrCategoryReducer from "../feature/currentGenreOrCategory";
import userReducer from "../feature/auth";

export default configureStore({
  reducer: {
    [tmbdApi.reducerPath]: tmbdApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmbdApi.middleware),
});
