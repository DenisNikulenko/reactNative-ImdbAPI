import React from 'react';
import {View, StyleSheet} from 'react-native';

import LottieView from 'lottie-react-native';

const MainLoading = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assests/movie-loading.json')}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainLoading;