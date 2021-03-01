import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {windowHeight} from '../../utilities/dimensions';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {COLORS} from '../../utilities/colors';

const SocialButton = ({backgroundColor='white', btnType, color='grey', btnTitle, ...rest}) => {
  let bgColor = backgroundColor;

  return (
    <TouchableOpacity
      style={[styles.btnContainer, {backgroundColor: bgColor}]}
      {...rest}>
      <View style={styles.iconWrapper}>
        <FontAwesome
          name={btnType}
          style={styles.icon}
          size={22}
          color={color} />
      </View>
      <View style={styles.btnTextWrapper}>
        <Text style={[styles.btnText]}>{btnTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 3,
    elevation: 2,
    borderLeftWidth: 0.5,
    borderBottomWidth: 0.5,
    borderRightWidth: 0.2,
  },

  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnTextWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    fontWeight: 'bold',
    color: 'white'
  },
});

export default SocialButton;
