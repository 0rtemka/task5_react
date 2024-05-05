import { MoviesList } from "../moviesList/MoviesList"
import styles from './SortedFilteredMoviesList.module.css'
import { Button } from "../UI/Button/Button"
import { useGenres } from "../../hooks/useGenres"
import { GenresForm } from "../GenresForm/GenresForm"
import { useFilteredMovies } from "../../hooks/useFilteredMovies"

export const SortedFilteredMoviesList = ({search=""}) => {

     const [genres, changeGenres] = useGenres()
     const [filteredMovies, sort, setSort] = useFilteredMovies(search)

     return (
          <>
               <div className={styles.filterSort}>
                    <Button onClick={setSort}>{sort}</Button>
                    <GenresForm genres={genres} onChange={changeGenres}></GenresForm>
               </div>
               <MoviesList movies={filteredMovies}></MoviesList>
          </>  
     )
}