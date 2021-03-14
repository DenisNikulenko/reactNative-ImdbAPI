const API_KEY = 'api_key=a0365c3dfe181648feb572b2dbf405c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const LANGUAGE = 'language=ru';
const TOP_POPULAR = 'movie/top_rated';
const YOUTUBE = 'https://www.youtube.com/watch?v';

export const getPopularMovies = async (page) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${TOP_POPULAR}?${API_KEY}&page=${page}&${LANGUAGE}`,
    );
    const json = await response.json();
    return json.results;
  } catch (error) {
    return error;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}?${API_KEY}&${LANGUAGE}`,
    );
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

export const getMovieActors = async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}/credits?${API_KEY}&${LANGUAGE}`,
    );
    const json = await response.json();
    const result = json.cast.filter((item) => item.profile_path);
    return result;
  } catch (error) {
    return error;
  }
};

export const getMovieSearch = async (search, page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/multi?${API_KEY}&${LANGUAGE}&query=${search}&page=${page}`,
    );
    const json = await response.json();
    const result = json.results.filter((i) => !i.name && i.poster_path);
    return result;
  } catch (error) {
    return console.log(error);
  }
};

export const getMovieTrailer = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}/videos?${API_KEY}`);
    const json = await response.json();
    if(json.results.length) {
      const result = json.results[0].key
      const link = `${YOUTUBE}=${result}`;
      return link;
    }

  } catch (error) {
    return console.log(error);
  }
};
