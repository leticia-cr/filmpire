import { configureStore } from "@reduxjs/toolkit";

import { tmbdApi } from "../services/TMDB";
import genreOrCategoryReducer from "../feature/currentGenreOrCategory";

export default configureStore({
  reducer: {
    [tmbdApi.reducerPath]: tmbdApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmbdApi.middleware),
});
