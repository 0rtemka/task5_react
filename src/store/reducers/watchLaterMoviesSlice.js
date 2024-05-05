import { createSlice } from "@reduxjs/toolkit";

export const watchLaterMoviesSlice = createSlice({
    name: 'watchLaterMovies',
    initialState: [],
    reducers: {
        addWatchLater: (state, action) => {
            state.push(action.payload)
        },
        removeWatchLater: (state, action) => {
            const index = state.findIndex(movie => movie.id == action.payload)
            state.splice(index, 1)
        }
    }
})

export const { addWatchLater, removeWatchLater } = watchLaterMoviesSlice.actions

export default watchLaterMoviesSlice.reducer