import { MovieCard } from '../movieCard/MovieCard'
import styles from './MoviesList.module.css'

export const MoviesList = ({movies}) => {
    return (
        <div className={styles.moviesList}>
            { movies.map(movie => 
                <MovieCard key={movie.id} movie={movie}/>
            )}
        </div>
    )
}