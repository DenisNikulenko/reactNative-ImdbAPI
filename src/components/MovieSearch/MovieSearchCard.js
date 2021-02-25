import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  addToBookmarks,
  removeFromBookmarks,
} from '../../redux/actions/moviesActions';

import {MovieButton} from '../ui/MovieButton';
import {isExist} from '../../utilities/funcHelpers';
import {windowWidth} from '../../utilities/dimensions';
import {IMAGE_URL} from '../../utilities/apiUrl';
import {COLORS} from '../../utilities/colors';

const MovieSearchCard = ({item}) => {
  const dispatch = useDispatch();
  const bookmarksList = useSelector(
    (state) => state.moviesReducer.bookmarksList,
  );

  const navigation = useNavigation();

  const {poster_path, id, title} = item;

  const BtnAddToBookmark = () => (
    <MovieButton
      styles={styles.btnAdd}
      onPress={() => dispatch(addToBookmarks(item))}
      iconName='star-sharp'
      iconColor="white"
      iconSize={30}
    />
  );

  const BtnRemoveFromBookmark = () => (
    <MovieButton
      styles={styles.btnRemove}
      onPress={() => dispatch(removeFromBookmarks(item))}
      iconColor="white"
      iconSize={30}
    />
  );

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
      {isExist(item, bookmarksList) ? (
        <BtnRemoveFromBookmark />
      ) : (
        <BtnAddToBookmark />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  movieCard: {
    width: windowWidth - 10,
    height: 100,
    backgroundColor: COLORS.WHITE,
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

  btnAdd: {
    flex: 2,
    height: '100%',
    backgroundColor: COLORS.GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  btnRemove: {
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
