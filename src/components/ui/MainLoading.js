import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

import LottieView from 'lottie-react-native';

const MainLoading = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} backgroundColor='black' />
      <LottieView
        source={require('../../assests/movie-loading.json')}
        autoPlay
        loop />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
});

export default MainLoading;