import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/movie-api.service';
import MoviesList from 'components/MoviesList/MoviesList';
import { Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(res => setMovies(res.results));
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
