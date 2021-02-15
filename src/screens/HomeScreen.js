import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

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
  const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(fetchPopularMovies(page));
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

  const scrollLoadMore = () => {
    setPage(page + 1)
  }

  if (isReady) {
    return (
        <AppIndicator style={styles.indicator} />
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ТОП популярных фильмов</Text>
        <MoviesList
          addToBookMarkList={onTapAddToBookmarkList}
          removeFromBookmarks={onTapRemoveFromBookmarkList}
          isExist={isExist}
          stateMovies={movies}
          scrollLoadMore={scrollLoadMore}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
  },
  indicator: {
    height: Dimensions.get("screen").height,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
