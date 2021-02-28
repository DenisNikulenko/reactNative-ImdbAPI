import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import {windowHeight} from '../../utilities/dimensions';
import {COLORS} from '../../utilities/colors';
const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} {...rest}>
      <Text style={styles.btnText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: COLORS.MAIN_COLOR,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    // borderWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 4,
    borderColor: COLORS.LIGHT_GREY,
  },

  btnText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default FormButton;
