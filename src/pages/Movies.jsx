import { searchMovies } from 'services/movie-api.service';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { Button, SearchInput } from './Movies.styled';
import { ImSearch } from 'react-icons/im';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState('');
  const [searchParams, setsearchParams] = useSearchParams('');
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      loadMoviews(query);
    }
  }, [query]);

  const handleSearchMovie = event => {
    event.preventDefault();
    const value = event.target.elements.search.value.toLowerCase();

    if (value === '') {
        setsearchParams({});
      } else {
        setsearchParams({ query: value });
      }

    loadMoviews(value);
    event.target.reset();
  };

  const loadMoviews = query => {
    searchMovies(query)
      .then(res => {
        if (res.results.length === 0) {
          return Promise.reject(`No movies found with ${query}`);
        }

        return res.results;
      })
      .then(results => setMovies(results))
      .catch(message => {
        setMessage(message);
        setMovies([]);
      });
  };

  return (
    <>
      <form onSubmit={handleSearchMovie}>
        <SearchInput
          type="text"
          name="search"
        />
        <Button>
            <ImSearch/>
            Search</Button>
      </form>
      {movies.length > 0 ? <MoviesList movies={movies} /> : <p>{message}</p>}
    </>
  );
};

export default Movies;
