import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { IMG_BASE_URL, getMovieDetails } from 'services/movie-api.service';
import {
    GoBackLink,
  HorizontalSeparator,
  MovieContent,
  MovieTitle,
  Poster,
  PosterContainer,
} from './MovieDetails.styled';
import { FiArrowLeft } from 'react-icons/fi';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(res => setMovieDetails(res));
  }, [movieId]);

  return (
    <>
      {movieDetails && (
        <div>
          <GoBackLink to={location?.state?.from ?? '/'}>
            <FiArrowLeft /> Back
          </GoBackLink>
          <PosterContainer>
            <MovieTitle>{movieDetails.title}</MovieTitle>
            <Poster
              src={`${IMG_BASE_URL}${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          </PosterContainer>
          <MovieContent>
            <p>User Score:{movieDetails.vote_average}</p>
            <h3>Overwiev</h3>
            <p>{movieDetails.overview}</p>
            <h3>Genres</h3>
            <p>{movieDetails.genres.map(genre => genre.name).join(' ')}</p>
            <HorizontalSeparator />
            <div>
              <p>Additional information</p>
              <ul>
                <li>
                  <Link to="cast">Cast</Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
              </ul>
            </div>
            <HorizontalSeparator />
            <Outlet />
          </MovieContent>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
