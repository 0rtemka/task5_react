import { Link } from 'react-router-dom'
import { Rating } from '../Rating/Rating'
import styles from './MovieDesc.module.css'

export const MovieDesc = ({movie}) => {
    return (
        <div className={styles.movieDesc}>
            <Link to={`/movies/${movie.id}`} className={styles.movieTitle}>{movie.title}</Link>
            <table className={styles.movieTable}>
                <tbody>
                    <tr>
                        <td>Год выпуска:</td>
                        <td>{movie.year}</td>
                    </tr>
                    <tr>
                        <td>Жанры:</td>
                        <td className={styles.genres}>{movie.genres.map(genre => 
                            <Link className={styles.genre} to={`/search?genre=${genre}`}>{genre}</Link>
                        )}</td>
                    </tr>
                    <tr>
                        <td>В гланых ролях:</td>
                        <td>{movie.actors.join(', ')}</td>
                    </tr>
                    <tr>
                        <td>Продолжительность:</td>
                        <td>{`${movie.duration} мин.`}</td>
                    </tr>
                    <tr>
                        <td>Рейтинг:</td>
                        <td>
                            <Rating value={movie.rating}></Rating>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}