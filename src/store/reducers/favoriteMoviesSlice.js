import { createSlice } from "@reduxjs/toolkit";

export const favoriteMoviesSlice = createSlice({
    name: 'favoriteMovies',
    initialState: [],
    reducers: {
        addFavorite: (state, action) => {
            state.push(action.payload)
        },
        removeFavorite: (state, action) => {
            const index = state.findIndex(movie => movie.id == action.payload)
            state.splice(index, 1)
        }
    }
})

export const { addFavorite, removeFavorite } = favoriteMoviesSlice.actions 

export default favoriteMoviesSlice.reducer