import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Comments } from "../components/Comments/Comments"
import { MovieDesc } from "../components/MovieDesc/MovieDesc"
import { MovieIcons } from "../components/MovieIcons/MovieIcons"
import { MoviesListSmall } from "../components/MoviesListSmall/MoviesListSmall"

export const MoviePage = () => {
    const { movieId } = useParams()

    const movies = useSelector(state => state.movies.movies)
    const movie = movies.find(movie => movie.id == movieId)

    const filterMovies = () => {
        const res = []

        movies.forEach(movie1 => {
            if (movie1.id === movie.id) return
            let count = 0
            movie.genres.forEach(genre => {
                if (movie1.genres.includes(genre)) count++
            })
            if (count >= 2) res.push(movie1)
        })

        return res;
    }

    const filteredMovies = filterMovies()

    return(
        <>
            <div className="main">
                <div className="movieDesc">
                    <img className="movieImg" src={movie.img ? movie.img : './src/assets/moviesImg/emptyImage.png'}></img>
                    <div className="movieDescIcons">
                        <MovieDesc movie={movie}></MovieDesc>
                        <MovieIcons movie={movie}></MovieIcons>
                    </div>
                </div>
                <div>
                    <h3>Описание</h3>
                    <p>{movie.description}</p>
                </div>
                {filteredMovies.length === 0 ? 
                    <></> :
                    <div>
                        <h3>Похожие фильмы</h3>
                        <MoviesListSmall movies={filteredMovies}></MoviesListSmall>
                    </div> 
                } 
            </div>
            <Comments></Comments>
        </>
    )
}