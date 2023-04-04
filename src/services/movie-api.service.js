const API_KEY = '1e61cd955c2c306dc91eea7ad841a388';
const BASE_URL = 'https://api.themoviedb.org/3';
export const IMG_BASE_URL ='https://image.tmdb.org/t/p/w500'

 export function getTrendingMovies() {
    return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`).then(res => res.json());
}

export function searchMovies(query) {
    return fetch(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`).then(res => res.json());
}

export function getMovieDetails(movieId) {
    return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`).then(res => res.json());
}

export function getMovieActors(movieId) {
    return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`).then(res => res.json());
}

export function getMovieReviews(movieId) {
    return fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`).then(res => res.json());
}

