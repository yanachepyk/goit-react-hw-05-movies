import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieItem, MovieLink } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
const location = useLocation();

    return  (<ul>
    {movies.map(movie => (
      <MovieItem key={movie.id}>
        <MovieLink to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</MovieLink>
      </MovieItem>
    ))}
  </ul>)
}
;

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default MoviesList;
