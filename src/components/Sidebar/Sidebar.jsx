import { useSelector } from 'react-redux'
import styles from './Sidebar.module.css'
import { MoviesCollection } from '../MoviesCollectioin/MoviesCollection';

export const Sidebar = () => {

    const favoriteMovies = useSelector(state => state.favoriteMovies)
    const watchLaterMovies = useSelector(state => state.watchLaterMovies)

    return (
        <div className={styles.sidebar}>
            <MoviesCollection title='Избранное' movies={favoriteMovies}></MoviesCollection>
            <MoviesCollection title='Смотреть позже' movies={watchLaterMovies}></MoviesCollection>
        </div>
    )
}