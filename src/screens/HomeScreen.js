import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {
  fetchPopularMovies,
  fetchDetailsMovie,
  addToBookmarks,
  removeFromBookmarks,
} from '../redux/actions/moviesActions';

import MoviesList from '../components/MoviesList';
import {THEME} from '../utilities/theme';

const HomeScreen = () => {
  const moviesReducer = useSelector((state) => state.moviesReducer);
  const dispatch = useDispatch();

  const {bookmarksList, movies} = moviesReducer;
  const isReady = moviesReducer.isFetching;


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

  let content;
  if (isReady) {
    return (content = (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" color={THEME.MAIN_COLOR} />
      </View>
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

  return {content};
  // <View style={styles.container}>
  //   <Text style={styles.title}>ТОП популярных фильмов</Text>
  //   <MoviesList
  //     addToBookMarkList={onTapAddToBookmarkList}
  //     removeFromBookmarks={onTapRemoveFromBookmarkList}
  //     isExist={isExist}
  //     stateMovies={movies}
  //   />
  // </View>
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
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
