import { MovieCardSmall } from '../MovieCardSmall/MovieCardSmall'
import styles from './MoviesListSmall.module.css'

export const MoviesListSmall = ({movies}) => {
    return (
        <div className={styles.moviesList}>
            {movies.map(movie => 
                <MovieCardSmall key={movie.id} movie={movie}></MovieCardSmall>
            )}
        </div>
    )
}