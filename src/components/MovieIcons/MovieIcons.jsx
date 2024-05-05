import { useDispatch } from 'react-redux'
import { ButtonIcon } from '../UI/ButtonIcon/ButtonIcon'
import { changeFavorite, changeWatchLater } from '../../store/reducers/moviesSlice'
import styles from './MovieIcons.module.css'
import { addFavorite, removeFavorite } from '../../store/reducers/favoriteMoviesSlice'
import { addWatchLater, removeWatchLater } from '../../store/reducers/watchLaterMoviesSlice'

export const MovieIcons = ({movie}) => {

    const dispatch = useDispatch()

    const changeFavoriteClick = () => {
        dispatch(changeFavorite(movie.id))
        movie.isFavorite ? dispatch(removeFavorite(movie.id)) : dispatch(addFavorite(movie))
    }

    const changeWatchLaterClick = () => {
        dispatch(changeWatchLater(movie.id))
        movie.isWatchLater ? dispatch(removeWatchLater(movie.id)) : dispatch(addWatchLater(movie))
    }
    
    return (
        <div className={styles.movieIcons}>
            <ButtonIcon text='' onClick={changeFavoriteClick} icon={movie.isFavorite ? '/src/assets/movieCard/favoriteFilled.png' : '/src/assets/movieCard/favoriteUnfilled.png'}></ButtonIcon>
            <ButtonIcon text='Буду смотреть' onClick={changeWatchLaterClick} icon={movie.isWatchLater ? '/src/assets/movieCard/bookmarkFilled.png' : '/src/assets/movieCard/bookmarkUnfilled.png'}></ButtonIcon>
        </div>
    )
}