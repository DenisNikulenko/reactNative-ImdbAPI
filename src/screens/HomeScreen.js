import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {fetchPopularMovies} from '../redux/actions/moviesActions';
// import {addToBookmarks, removeFromBookmarks, fetchPopularMovies} from "../redux/actions"

import MoviesList from '../components/MoviesList';

const HomeScreen = ({navigation}) => {
  const moviesReducer = useSelector((state) => state.moviesReducer);
  const dispatch = useDispatch();

  const {bookmarksList, movies} = moviesReducer;
  // console.log(movies);
  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ТОП популярных фильмов</Text>
      <MoviesList stateMovies={movies} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
  },
  title: {
    fontSize: 25
  }
});

export default HomeScreen;
