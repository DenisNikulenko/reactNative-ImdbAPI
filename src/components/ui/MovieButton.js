import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const MovieButton = ({
  styles,
  onPress = ()=> console.log("hello"),
  iconName = "trash-outline",
  iconColor = "black",
  iconSize = 20
}) => {
  
  return (
    <TouchableOpacity style={{...styles}} onPress={onPress} >
      <Ionicons name={iconName} color={iconColor} size={iconSize} />
    </TouchableOpacity>
  );
};