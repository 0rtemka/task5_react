import { Link } from 'react-router-dom'
import styles from './MovieCardSmall.module.css'

export const MovieCardSmall = ({movie}) => {
    return (
        <Link to={`/movies/${movie.id}`} className={styles.movieCard}>
            <img className={styles.movieImg} src={movie.img ? movie.img : './src/assets/moviesImg/emptyImage.png'}></img>
            <span className={styles.movieTitle}>{movie.title}</span>
        </Link>
    )
}