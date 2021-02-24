import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} {...rest}>
      <Text style={styles.btnText}>{buttonTitle}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 10,
    width: '100%',
    height: Dimensions.get('screen').height / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "black"
  },

  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default FormButton;