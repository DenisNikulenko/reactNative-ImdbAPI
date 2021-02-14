import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {fetchPopularMovies, fetchDetailsMovie, addToBookmarks,removeFromBookmarks} from '../redux/actions/moviesActions';
// import {addToBookmarks, removeFromBookmarks, fetchPopularMovies} from "../redux/actions"

import MoviesList from '../components/MoviesList';

const HomeScreen = ({navigation}) => {
  const moviesReducer = useSelector((state) => state.moviesReducer);
  const dispatch = useDispatch();

  const {bookmarksList, movies} = moviesReducer;

  const [currentMovie, setCurrentMovie] = useState(undefined);

  useEffect(() => {
{}
    dispatch(fetchPopularMovies());
    //тут
    dispatch(fetchDetailsMovie());
  }, []);

  useEffect(()=>{
    if(movies.length > 0) {
      setCurrentMovie(movies[0])
    }
  }, [movies])

  const didTapCurrentMovie = (movie) => {
    setCurrentMovie(movie)
  }

  const onTapAddToBookmarkList = (movie) => {
     
  }

  const onTapRemoveFromBookmarkList = (movie) => {

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ТОП популярных фильмов</Text>
      <MoviesList didTapCurrentMovie={didTapCurrentMovie} stateMovies={movies} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    marginBottom: 40
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "grey"
  }
});

export default HomeScreen;
