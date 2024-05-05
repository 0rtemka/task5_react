import { useSelector } from "react-redux"
import { useSort } from "./useSort"

export const useFilteredMovies = (search="") => {

    const movies = useSelector(state => state.movies.movies)
    const genres = useSelector(state => state.filter.genres)
    const [sort, changeSort] = useSort()

    const filterMovies = () => {
        if (!movies) return
        const res = []
        movies.forEach( movie => {
            let isMatched = true
            genres.forEach(genre => {
                if (!genre.selected) return
                if (movie.genres.indexOf(genre.name) == -1) isMatched = false
            })
            if (isMatched) res.push(movie)
           })
        return res
    }

    const sortMovies = (movies) => {
        if (sort == "По возрастанию") {
            return movies.sort((m1, m2) => m1.rating - m2.rating)
        } else if (sort == "По убыванию") {
            return movies.sort((m1, m2) => m2.rating - m1.rating)
        } else {
            return movies
        }
    }

    const filteredMovies = sortMovies(filterMovies()).filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))

    return [filteredMovies, sort, changeSort]
}