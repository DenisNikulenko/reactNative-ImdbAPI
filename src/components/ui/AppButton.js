import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

export const AppButton = ({
  children,
  onPress,
  width = 70,
  color = 'white',
  backgroundColor = '#ff4d4d',
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={{...styles.button, backgroundColor: backgroundColor, width: width}}>
        <Text style={{...styles.text, color: color}}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
  },
});
