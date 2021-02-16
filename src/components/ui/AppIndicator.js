import React from 'react';
import {View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';

import {COLORS} from '../../utilities/colors';

export default AppIndicator = () => {
  return (
    <View style={styles.indicator}>
      <ActivityIndicator size="large" color={COLORS.MAIN_COLOR} />
    </View>
  );
};

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
