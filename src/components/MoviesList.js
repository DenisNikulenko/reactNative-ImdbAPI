import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFilms} from '../redux/actions/movieActions';

const MoviesList = () => {
  const stateFilms = useSelector((state) => state.movie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

  console.log(stateFilms);
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
