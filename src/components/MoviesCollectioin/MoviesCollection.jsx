import styles from './MoviesCollection.module.css'
import { Link } from 'react-router-dom'

export const MoviesCollection = ({movies, title}) => {

    return (
        <div className={styles.moviesCollection}>
            <div className={styles.header}>
                {title}
            </div>
            {movies.length === 0 ? 'Коллекция пуста' : 
                movies.map((movie, index) => 
                    <Link key={movie.id} to={`/movies/${movie.id}`} className={styles.movie}>
                        {`${index+1}. ${movie.title}`}
                    </Link>
            )}
        </div>
    )
}