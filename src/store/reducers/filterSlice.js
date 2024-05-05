import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        search: "",
        sort: "Сортировать по рейтингу",
        genres: [
            { name: "фантастика", selected: false},
            { name: "драма", selected: false},
            { name: "приключения", selected: false},
            { name: "комедия", selected: false},
            { name: "фэнтези", selected: false}, 
            { name: "боевик", selected: false},
            { name: "мультфильм", selected: false},
            { name: "мелодрама", selected: false},
            { name: "семейный", selected: false},
            { name: "триллер", selected: false},
            { name: "детектив", selected: false},
            { name: "криминал", selected: false},
            { name: "биография", selected: false}
        ]
    },
    reducers: {
        changeGenres: (state, action) => {
            const genre = action.payload
            const index = state.genres.findIndex((genre1) => genre1.name == genre.name)

            state.genres[index].selected = !state.genres[index].selected
        },
        selectGenre: (state, action) => {
            const genre = action.payload
            const index = state.genres.findIndex((genre1) => genre1.name == genre.name)

            state.search = ""
            state.sort = "Сортировать по рейтингу"
            state.genres.map(genre => genre.selected = false)

            state.genres[index].selected = true
        },
        changeSort: (state) => {
            if (state.sort === 'По убыванию') state.sort = ('Сортировать по рейтингу')
            else if (state.sort === 'По возрастанию') state.sort = ('По убыванию')
            else state.sort = ('По возрастанию')
        },
        setGenres: (state, action) => {
            state.genres = action.payload
        },
        changeSearch: (state, action) => {
            state.search = action.payload
        }
    }
})

export const { changeGenres, selectGenre, changeSort, changeSearch, setGenres } = filterSlice.actions

export default filterSlice.reducer