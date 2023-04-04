import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movie-api.service';
import { Review, ReviewList } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [message, setMessage] = useState('');

  useEffect(() => {
    getMovieReviews(movieId)
      .then(res => {
        if (res.results.length === 0) {
          return Promise.reject('We do not have any reviews for this movie');
        }
        return res;
      })
      .then(res => setReviews(res.results))
      .catch(message => setMessage(message));
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ReviewList>
          {reviews.map(review => (
            <Review>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </Review>
          ))}
        </ReviewList>
      ) : (
        <div>{message}</div>
      )}
    </div>
  );
};
