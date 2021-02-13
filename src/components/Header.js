import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {THEME} from "../utilities/theme";

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={THEME.MAIN_COLOR}/>
      <Text style={styles.text}>
        <Ionicons color={THEME.MAIN_COLOR} name="logo-tux" size={25} />
        Movies <Text style={styles.textDB}>DB</Text>
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
  text: {},
  textDB: {
    fontWeight: 'bold',
    color: THEME.MAIN_COLOR
  },
});

export default Header;
