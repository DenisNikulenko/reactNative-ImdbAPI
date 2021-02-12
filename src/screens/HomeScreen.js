import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import FilmList from '../components/FilmsList';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <FilmList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;