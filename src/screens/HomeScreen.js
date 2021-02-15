import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {
  fetchPopularMovies,
  fetchDetailsMovie,
  addToBookmarks,
  removeFromBookmarks,
} from '../redux/actions/moviesActions';

import AppIndicator from "../components/ui/AppIndicator";
import MoviesList from '../components/MoviesList';

const HomeScreen = () => {
  const moviesReducer = useSelector((state) => state.moviesReducer);
  const dispatch = useDispatch();

  const {bookmarksList, movies} = moviesReducer;
  const isReady = moviesReducer.isFetching;

  let content;

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchDetailsMovie());
  }, []);

  const onTapAddToBookmarkList = (movie) => {
    dispatch(addToBookmarks(movie));
  };

  const onTapRemoveFromBookmarkList = (movie) => {
    dispatch(removeFromBookmarks(movie));
  };

  const isExist = (movie) => {
    if (bookmarksList.filter((item) => item.id === movie.id).length > 0) {
      return true;
    }
    return false;
  };

  if (isReady) {
    return (content = (
        <AppIndicator />
    ));
  } else {
    return (content = (
      <View style={styles.container}>
        <Text style={styles.title}>ТОП популярных фильмов</Text>
        <MoviesList
          addToBookMarkList={onTapAddToBookmarkList}
          removeFromBookmarks={onTapRemoveFromBookmarkList}
          isExist={isExist}
          stateMovies={movies}
        />
      </View>
    ));
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
  }
});

export default HomeScreen;
