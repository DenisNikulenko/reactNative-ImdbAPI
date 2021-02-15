import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {addToBookmarks, removeFromBookmarks} from "../../redux/actions/moviesActions";

import {IMAGE_URL} from '../../utilities/apiUrl';
import {AppButton} from "./AppButton";
import {THEME} from "../../utilities/theme";

const AppCardPreviewMovie = ({item, iconName, iconSize}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const bookmarksList = useSelector((state) => state.moviesReducer.bookmarksList);
	const {poster_path, id, title} = item;

  const isExist = (movie) => {
    if (bookmarksList.filter((item) => item.id === movie.id).length > 0) {
      return true;
    }
    return false;
  };

  return (
    <TouchableOpacity style={styles.movieCard} onPress={() => navigation.navigate('Details', {id,title})}>
      <Image
        style={styles.movieCardIamge}
        resizeMode="stretch"
        source={{
          uri: `${IMAGE_URL}/${poster_path}`,
        }}
      />
      <Text style={styles.movieCardTitle}>{title}</Text>
      {isExist(item) ?
        <AppButton 
          styles={styles.movieBtnFalse}  
          onPress={() => dispatch(removeFromBookmarks(item))}
          iconName={iconName}
          iconColor="white"
          iconSize={iconSize} />
        :
        <AppButton 
          styles={styles.movieBtnTrue}  
          onPress={() => dispatch(addToBookmarks(item))}
          iconName={iconName}
          iconColor="white"
          iconSize={iconSize} />
      }
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
  
  movieBtnTrue: {
    flex: 2,
    height: '100%',
    backgroundColor: THEME.GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  movieBtnFalse: {
    flex: 2,
    height: '100%',
    backgroundColor: THEME.MAIN_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  }
});

export default AppCardPreviewMovie;
