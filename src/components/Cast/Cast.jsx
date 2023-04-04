import { IMG_BASE_URL, getMovieActors } from 'services/movie-api.service';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Actor, ActorList, ImgContainer } from './Cast.styled';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieActors(movieId).then(res => setActors(res.cast));
  }, [movieId]);

  return (
    <ActorList>
      {actors.map(actor => (
        <Actor key={actor.id}>
          <ImgContainer>
            <img
              src={`${IMG_BASE_URL}${actor.profile_path}`}
              alt={actor.name}
            />
          </ImgContainer>
          <h3>{actor.name}</h3>
          <p>Character: {actor.character}</p>
        </Actor>
      ))}
    </ActorList>
  );
};
