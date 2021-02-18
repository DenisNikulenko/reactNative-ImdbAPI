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
import {
  addToBookmarks,
  removeFromBookmarks,
} from '../../redux/actions/moviesActions';

import {IMAGE_URL} from '../../utilities/apiUrl';
import {MovieButton} from '../ui/MovieButton';
import {COLORS} from '../../utilities/colors';

const MovieSearchCard = ({item, iconName, iconSize}) => {
  const dispatch = useDispatch();
  const bookmarksList = useSelector(
    (state) => state.moviesReducer.bookmarksList,
  );
  const navigation = useNavigation();

  const {poster_path, id, title} = item;

  const isExist = (movie) => {
    if (bookmarksList.filter((item) => item.id === movie.id).length > 0) {
      return true;
    }
    return false;
  };

  return (
    <TouchableOpacity
      style={styles.movieCard}
      onPress={() => navigation.navigate('Details', {id})}>
      <Image
        style={styles.movieCardIamge}
        source={{
          uri: `${IMAGE_URL}/${poster_path}`,
        }}
      />
      <Text style={styles.movieCardTitle}>{title}</Text>
      {isExist(item) ? (
        <MovieButton
          styles={styles.movieBtnFalse}
          onPress={() => dispatch(removeFromBookmarks(item))}
          iconName={iconName}
          iconColor="white"
          iconSize={iconSize}
        />
      ) : (
        <MovieButton
          styles={styles.movieBtnTrue}
          onPress={() => dispatch(addToBookmarks(item))}
          iconName={iconName}
          iconColor="white"
          iconSize={iconSize}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  movieCard: {
    width: Dimensions.get('screen').width - 10,
    height: 100,
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
    backgroundColor: COLORS.GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  movieBtnFalse: {
    flex: 2,
    height: '100%',
    backgroundColor: COLORS.MAIN_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default MovieSearchCard;
