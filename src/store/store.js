import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "./reducers/commentsSlice";
import moviesSlice from "./reducers/moviesSlice";
import favoriteMoviesSlice from "./reducers/favoriteMoviesSlice";
import watchLaterMoviesSlice from "./reducers/watchLaterMoviesSlice";
import filterSlice from "./reducers/filterSlice";

export const store = configureStore({
    reducer: {
        movies: moviesSlice,
        comments: commentsSlice,
        favoriteMovies: favoriteMoviesSlice,
        watchLaterMovies: watchLaterMoviesSlice,
        filter: filterSlice
    }
})