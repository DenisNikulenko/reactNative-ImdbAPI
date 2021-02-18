import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {
  addToBookmarks,
  removeFromBookmarks,
} from '../../redux/actions/moviesActions';
import {useNavigation} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {IMAGE_URL} from '../../utilities/apiUrl';
import {isExist} from '../../utilities/funcHelpers';

const MovieDetailsImage = ({movieDetails}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const bookmarksList = useSelector(
    ({moviesReducer}) => moviesReducer.bookmarksList,
  );

  const {poster_path, title, vote_average, runtime} = movieDetails;

  const BtnStarTrue = () => (
    <TouchableOpacity
      onPress={() => dispatch(removeFromBookmarks(movieDetails))}>
      <Ionicons style={styles.iconStarGold} name="star" size={30} />
    </TouchableOpacity>
  );

  const BtnStarFalse = () => (
    <TouchableOpacity onPress={() => dispatch(addToBookmarks(movieDetails))}>
      <Ionicons style={styles.iconStarWhite} name="star" size={30} />
    </TouchableOpacity>
  );

  return (
    <View>
      <Image
        style={styles.imageHeader}
        source={{
          uri: `${IMAGE_URL}/${poster_path}`,
        }}
      />

      <View style={styles.opacityBlockTop}></View>

      <View style={styles.title}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons style={styles.iconBack} name="arrow-back" size={40} />
        </TouchableOpacity>

        <Text numberOfLines={1} style={styles.textTitle}>
          {title}
        </Text>

        {isExist(movieDetails, bookmarksList) ? <BtnStarTrue /> : <BtnStarFalse />}
      </View>

      <View style={styles.opacityBlockBottom}></View>

      <View style={styles.descriptionBottom}>
        <Text style={styles.textInfo}>
          <Ionicons name="star" color="yellow" size={18} /> {vote_average}
        </Text>
        <Text style={styles.textInfo}>
          <Ionicons name="time" color="white" size={18} /> {runtime} мин.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageHeader: {
    height: Dimensions.get('screen').height / 2,
  },

  opacityBlockTop: {
    backgroundColor: 'black',
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: 45,
    opacity: 0.3,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },

  title: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  btnBack: {
    marginLeft: 5,
  },

  iconBack: {
    color: 'white',
    width: 50,
    height: 50,
  },

  textTitle: {
    width: Dimensions.get('screen').width / 1.4,
    color: 'white',
    fontSize: 22,
  },

  iconStarWhite: {
    color: 'white',
    marginRight: 10,
  },
  iconStarGold: {
    color: 'gold',
    marginRight: 10,
  },

  opacityBlockBottom: {
    backgroundColor: 'black',
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: 50,
    opacity: 0.3,
    top: Dimensions.get('screen').width - 25,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  descriptionBottom: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    top: Dimensions.get('screen').width - 20,
  },

  textInfo: {
    color: 'white',
    fontSize: 18,
  },

  textBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MovieDetailsImage;
