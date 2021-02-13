import React from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';

const MoviesList = ({stateMovies}) => {
  //movie.title

console.log(stateMovies)

  return (
    <SafeAreaView style={styles.container}>
    {/* <FlatList
      data={stateMovies}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    /> */}
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default MoviesList;
