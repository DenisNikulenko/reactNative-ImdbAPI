const API_KEY = 'api_key=a0365c3dfe181648feb572b2dbf405c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
const LANGUAGE = 'language=ru';
const TOP_POPULAR = 'movie/top_rated';

export const getPopularMovies = async (page) => {
  try {
    const response = await fetch(`${BASE_URL}/${TOP_POPULAR}?${API_KEY}&page=${page}&${LANGUAGE}`);
    const json = await response.json();
    return json.results;
  } catch (error) {
    return error;
  }
}

export const getMovieDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}?${API_KEY}&${LANGUAGE}`);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

export const getMovieActors = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}/credits?${API_KEY}&${LANGUAGE}`);
    const json = await response.json();
    const result = json.cast.filter(item => item.profile_path);
    return result;
  } catch (error) {
    return error;
  }
};

export const getMovieSearch = async (search, page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/search/multi?${API_KEY}&${LANGUAGE}&query=${search}&page=${page}`);
    const json = await response.json();
    const result = json.results.filter(i => !i.name && i.poster_path)
    return result;
  } catch (error) {
    return error;
  }
};