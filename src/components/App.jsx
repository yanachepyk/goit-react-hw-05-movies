import { lazy, Suspense } from 'react';
import { Routes, Route, Outlet} from 'react-router-dom';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Container, Header, HeaderList, StyledNavLink } from './App.styled';

const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies'));

export const App = () => {
  return (
    <Container>
    <Header>
    <HeaderList>
        <li>
          <StyledNavLink to='/' >Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/movies' >Movies</StyledNavLink>
        </li>
      </HeaderList>
    </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
      </Suspense>
    </Container>
  );
};
