import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: [
        {id: 1, movieId: 1, body: 'Мой любимый фильм'},
        {id: 2, movieId: 1, body: 'Обожаю тему космоса, а этот фильм просто лучший'},
        {id: 3, movieId: 2, body: 'Очень смешной фильм. Хорошо подходит для семейного просмотра'},
        {id: 4, movieId: 3, body: 'Замечательное кино!'},
        {id: 5, movieId: 4, body: 'Любимый мультик'},
        {id: 6, movieId: 4, body: 'Шрек - лучший мультфильм, что я смотрел'},
        {id: 7, movieId: 4, body: 'Всем советую к просмотру. Отличный мультфильм'},
        {id: 8, movieId: 5, body: 'Всем советую к просмотру. Отличный мультфильм'},
        {id: 9, movieId: 6, body: 'Всем советую к просмотру. Отличный мультфильм'},
        {id: 10, movieId: 7, body: 'Очень хороший фильм с красивой историей'},
        {id: 11, movieId: 7, body: 'Фильм 10/10'},
        {id: 12, movieId: 8, body: 'Всем советую к просмотру!'},
        {id: 13, movieId: 8, body: 'Точно входит в коллекцию моих любимых фильмов'},
        {id: 14, movieId: 9, body: 'Теперь хочу написать свой фейсбук...'},
        {id: 15, movieId: 9, body: 'Классный фильм'},
    ],
    reducers: {
        addComment: (state, action) => {
            state.push({
                id: state.length + 1,
                movieId: Number(action.payload.movieId),
                body: action.payload.body
            })
        }
    }
})

export const { addComment } = commentsSlice.actions

export default commentsSlice.reducer