import { Link } from 'react-router-dom'
import styles from './MovieCard.module.css'
import { MovieDesc } from '../MovieDesc/MovieDesc'
import { MovieIcons } from '../MovieIcons/MovieIcons'

export const MovieCard = ({movie}) => {

    return (
        <div className={styles.movieCard}>
            <div className={styles.movieText}>
                <MovieDesc movie={movie}></MovieDesc>
                <MovieIcons movie={movie}></MovieIcons>
            </div>
            <img className={styles.movieImg} src={movie.img ? movie.img : './src/assets/moviesImg/emptyImage.png'}></img>
        </div>
    )
}