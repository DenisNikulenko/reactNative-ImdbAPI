import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import MoviesList from '../components/MoviesList';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <MoviesList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;