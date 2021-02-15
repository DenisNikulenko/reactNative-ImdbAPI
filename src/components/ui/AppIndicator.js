import React from 'react';
import {View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';

import {THEME} from '../../utilities/theme';

export default AppIndicator = () => {
  return (
    <View style={styles.indicator}>
      <ActivityIndicator size="large" color={THEME.MAIN_COLOR} />
    </View>
  )
};

const styles = StyleSheet.create({
  indicator: {
    height: Dimensions.get("screen").height,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
