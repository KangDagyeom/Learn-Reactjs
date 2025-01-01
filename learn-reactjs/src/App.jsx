import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './searchIcon.svg';
import MovieCard from './components/MovieCard';

const API_URL = 'http://www.omdbapi.com/?apikey=38813dc0';

const App = () => {
  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState('');
  const searchMovies = async (title) => {
    const respone = await fetch(`${API_URL}&s=${title}`);
    const data = await respone.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Batman');
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input value={search} placeholder="Search for movies" onChange={(e) => setSearch(e.target.value)} />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(search)} />
      </div>

      {
        movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }


    </div>
  );
}

export default App;

