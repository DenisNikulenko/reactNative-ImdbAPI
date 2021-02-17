import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import {getPopularMovies} from '../services/movieServices';

import MovieList from '../components/MovieList';
import MovieHeader from '../components/MovieHeader';
import MovieIndicator from '../components/ui/MovieIndicator';
import {COLORS} from '../utilities/colors';

const HomeScreen = () => {
  const [isReady, setIsReady] = useState(true);
  const [page, setPage] = useState(1);
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    fetchAPI(page);
  }, [page]);

  const fetchAPI = async (page) => {
    setPopularMovie([...popularMovie, ...(await getPopularMovies(page))]);
    setIsReady(false);
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
    color: COLORS.GREY,
  },
});

export default HomeScreen;
