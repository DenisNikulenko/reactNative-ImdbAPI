import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {COLORS} from '../../utilities/colors';

const SocialButton = ({btnType, onPress, ...rest}) => {
  return (
    <TouchableOpacity style={styles.iconButton} onPress={onPress} {...rest} >
      <FontAwesome style={styles.iconStyle} name={btnType} />
     </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    backgroundColor: COLORS.LIGHT_GREY,
    padding: 14,
    marginHorizontal: 10,
    borderRadius: 100,
  },

  iconStyle: {
    fontSize:30,
    color: COLORS.MAIN_COLOR,
  },
});

export default SocialButton;
