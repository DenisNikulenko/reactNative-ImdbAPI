import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
