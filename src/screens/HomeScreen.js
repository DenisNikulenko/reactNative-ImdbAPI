import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import {useSelector, useDispatch} from "react-redux";
import {
  fetchPopularMovies,
  addToBookmarks,
  removeFromBookmarks,
} from '../redux/actions/moviesActions';

import MovieIndicator from '../components/ui/MovieIndicator';
import MovieList from '../components/MovieList';
import MovieHeader from '../components/MovieHeader'
import {getPopularMovies} from "../services/movieServices";

const HomeScreen = () => {
  const bookmarksList = useSelector(({moviesReducer}) => moviesReducer.bookmarksList);
  const dispatch = useDispatch();

  const [isReady, setIsReady] = useState(true)
  const [page, setPage] = useState(1);
  const [popularMovie, setPopularMovie] = useState([])

  useEffect(() => {
    fetchAPI(page);
  }, [page]);

  const fetchAPI = async (page) => {
    setPopularMovie([...popularMovie, ...await getPopularMovies(page)])
    setIsReady(false);
  };

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

  if (isReady) {
    return <MovieIndicator />;
  } else {
    return (
      <View style={styles.container}>
        <MovieHeader title="ТОП популярных фильмов" />
        <MovieList
          addToBookMarkList={onTapAddToBookmarkList}
          removeFromBookmarks={onTapRemoveFromBookmarkList}
          isExist={isExist}
          stateMovies={popularMovie}
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
