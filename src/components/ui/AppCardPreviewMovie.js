import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import {IMAGE_URL} from '../../utilities/apiUrl';
import { THEME } from '../../utilities/theme';
import {AppButton} from "./AppButton";

const AppCardPreviewMovie = ({item, onPressBtn, onPressNavigation, iconName, iconColor, iconSize}) => {
  
	const {poster_path, id, title} = item;

  return (
    <TouchableOpacity style={styles.movieCard} onPress={onPressNavigation}>
      <Image
        style={styles.movieCardIamge}
        resizeMode="stretch"
        source={{
          uri: `${IMAGE_URL}/${poster_path}`,
        }}
      />
      <Text style={styles.movieCardTitle}>{title}</Text>
      <AppButton 
        styles={styles.movieCardBtn}  
        onPress={onPressBtn}
        iconName={iconName}
        iconColor={iconColor}
        iconSize={iconSize} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  movieCard: {
    width: Dimensions.get('screen').width - 10,
    height: 95,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  movieCardIamge: {
    margin: 5,
    flex: 3,
    resizeMode: 'stretch',
    borderRadius: 5,
    height: '90%',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  movieCardTitle: {
    flex: 6,
    padding: 10,
    fontSize: 14,
  },
  movieCardBtn: {
    flex: 2,
    height: '100%',
    backgroundColor: THEME.MAIN_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default AppCardPreviewMovie;
