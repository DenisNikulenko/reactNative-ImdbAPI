import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useSelector, useDispatch} from "react-redux";
import {
  fetchPopularMovies,
  addToBookmarks,
  removeFromBookmarks,
} from '../redux/actions/moviesActions';

import MovieIndicator from '../components/ui/MovieIndicator';
import MovieList from '../components/MovieList';
import MovieHeader from '../components/MovieHeader'

const HomeScreen = () => {
  const moviesReducer = useSelector((state) => state.moviesReducer);
  const {bookmarksList, movies} = moviesReducer;
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPopularMovies(page));
  }, [page]);

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
    setPage(page + 1);
  };

  if (movies.length < 1) {
    return <MovieIndicator />;
  } else {
    return (
      <View style={styles.container}>
        <MovieHeader title="ТОП популярных фильмов" />
        <MovieList
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
});

export default HomeScreen;
