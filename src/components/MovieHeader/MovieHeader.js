import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from "../../utilities/colors";

const MovieHeader = ({title}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.MAIN_COLOR} />
      <Text style={styles.text}>
        <Ionicons color={COLORS.MAIN_COLOR} name="logo-tux" size={25} />
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    flexDirection: 'column',
    alignItems: 'center',
  },

  textDB: {
    fontWeight: 'bold',
    color: COLORS.MAIN_COLOR
  }
});

export default MovieHeader;
