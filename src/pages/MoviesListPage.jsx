import { useSelector } from "react-redux"
import { SortedFilteredMoviesList } from "../components/SortedFilteredMoviesList/SortedFilteredMoviesList"

export const MoviesListPage = () => {

  const movies = useSelector(state => state.movies.movies)

  return (
    <div className="main">
        <SortedFilteredMoviesList movies={movies}></SortedFilteredMoviesList>
    </div>
  )
}