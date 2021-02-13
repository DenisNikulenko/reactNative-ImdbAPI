import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPopularMovies} from '../redux/actions/moviesActions';

const MoviesList = () => {
  const dispatch = useDispatch();
  const stateMovies = useSelector((state) => state.movies);
  console.log(stateMovies);
  
  useEffect(() => {
    dispatch(fetchPopularMovies());
    console.log(stateMovies);
  }, []);

  return (
    <View>
      <Text></Text>
      <Text>Тут список</Text>
      <Text>Тут список</Text>
      <Text>Тут список</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MoviesList;
