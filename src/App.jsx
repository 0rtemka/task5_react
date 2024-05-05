import { Route, Routes } from 'react-router-dom'
import './App.css'
import { MoviesListPage } from './pages/MoviesListPage'
import { MoviePage } from './pages/MoviePage'
import { AboutPage } from './pages/AboutPage'
import { Layout } from './pages/Layout'
import { SearchPage } from './pages/SearchPage'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<AboutPage/>}></Route>
          <Route path='movies' element={<MoviesListPage/>}></Route>
          <Route path='movies/:movieId' element={<MoviePage/>}></Route>
          <Route path='search' element={<SearchPage/>}></Route>
        </Route>
      </Routes>
  )
}

export default App
