import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SortedFilteredMoviesList } from "../components/SortedFilteredMoviesList/SortedFilteredMoviesList"
import { changeSearch, selectGenre } from "../store/reducers/filterSlice"
import { useSearchParams } from "react-router-dom"

export const SearchPage = () => {

    const [params, setParams] = useSearchParams()
    
    const search = useSelector(state => state.filter.search)
    const [movieTitle, setMovieTitle] = useState(search)
    const dispatch = useDispatch()

    function searchMovies(e) {
        e.preventDefault()
        dispatch(changeSearch(movieTitle))
    }

    useEffect(
        () => {
            const genre = params.get("genre")
            if (genre) {
                dispatch(selectGenre({name: genre}))
                setMovieTitle("")
            }
        }, [params]
    )

    return (
        <div className="main">
            <form>
                <label className="titleInput">
                    <span>Введите название фильма</span>
                    <input value={movieTitle} onChange={e => setMovieTitle(e.target.value)}></input>
                    <button onClick={searchMovies}>Поиск</button>
                </label>
            </form>
            <SortedFilteredMoviesList search={search}></SortedFilteredMoviesList>
        </div>
    )
}