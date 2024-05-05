import { useDispatch, useSelector } from "react-redux"
import { changeGenres } from "../store/reducers/filterSlice"

export const useGenres = () => {

    const genres = useSelector(state => state.filter.genres)
    const dispatch = useDispatch()

    const addRemoveGenre = (genre) => {
        dispatch(changeGenres(genre))
    }

    return [genres, addRemoveGenre]
}