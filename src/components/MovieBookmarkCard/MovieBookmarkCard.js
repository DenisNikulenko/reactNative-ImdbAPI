import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';

import {removeFromBookmarks} from '../../redux/actions/moviesActions';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {IMAGE_URL} from '../../utilities/apiUrl';
import {windowWidth} from '../../utilities/dimensions';
import {COLORS} from '../../utilities/colors';

const MovieBookmarkCard = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {poster_path, id, title} = item;

  return (
    <TouchableOpacity
      style={styles.movieCard}
      onPress={() => navigation.navigate('Details', {id, title})}>
      <Image
        style={styles.movieCardIamge}
        resizeMode='stretch'
        source={{
          uri: `${IMAGE_URL}/${poster_path}`,
        }}
      />
      <Text style={styles.movieCardTitle}>{title}</Text>
      <TouchableOpacity
        style={styles.movieCardBtn}
        onPress={() => {
          dispatch(removeFromBookmarks(item));
          ToastAndroid.show('Удален из закладок', 2000);
        }}>
        <Ionicons name="trash-outline" color={COLORS.WHITE} size={26} />
      </TouchableOpacity>
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
    borderRadius: 5,
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  movieCardTitle: {
    flex: 5,
    padding: 10,
    fontSize: 14,
  },

  movieCardBtn: {
    flex: 2,
    height: '100%',
    backgroundColor: COLORS.MAIN_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default MovieBookmarkCard;
