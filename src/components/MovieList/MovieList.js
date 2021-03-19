import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {
  addToBookmarks,
  removeFromBookmarks,
} from '../../redux/actions/moviesActions';

import {useNavigation} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MovieIndicator from '../ui/MovieIndicator';
import MovieStars from '../ui/MovieStars';
import {isExist} from '../../utilities/funcHelpers';
import {windowWidth, windowHeight} from '../../utilities/dimensions';
import {IMAGE_URL} from '../../utilities/apiUrl';
import {COLORS} from '../../utilities/colors';

const MovieList = ({stateMovies, scrollLoadMore}) => {
  const dispatch = useDispatch();
  const bookmarksList = useSelector(
    ({moviesReducer}) => moviesReducer.bookmarksList,
  );

  const navigation = useNavigation();

  const renderItem = ({item}) => {
    const {id, title, release_date, poster_path, vote_average} = item;

    const BtnAddBookmark = () => {
      return (
        <TouchableOpacity
          style={[styles.BtnBookmark, {backgroundColor: COLORS.MAIN_COLOR}]}
          onPress={() => {
            dispatch(addToBookmarks(item));
            ToastAndroid.show('Добавлен в закладки', 2000);
          }}>
          <Ionicons name='bookmarks' size={24} color='white' />
          <Text style={styles.textAddBookMark}>Смотреть позже</Text>
        </TouchableOpacity>
      );
    };

    const BtnRemoveFromBookmark = () => {
      return (
        <TouchableOpacity
          style={styles.BtnBookmark}
          onPress={() => {
            dispatch(removeFromBookmarks(item));
            ToastAndroid.show('Удален из закладок', 2000);
          }}>

          <Ionicons name='bookmarks' size={24} color='white' />
          <Text style={styles.textAddBookMark}>Remove from bookmark</Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={styles.movieItem}>
        <TouchableOpacity onPress={() => navigation.navigate('Details', {id})}>
          <View style={styles.infoTitle}>

            <Text numberOfLines={1} style={styles.infoTitleText}>
              {title}
            </Text>
            
            <Text style={styles.infoTitleDate}>Релиз: {release_date}</Text>
          </View>
          <Image
            style={styles.movieImage}
            source={{
              uri: `${IMAGE_URL}/${poster_path}`,
            }}
          />
          <View style={styles.infoRaite}>
            <Text style={styles.infoRaiteText}>
              Рейтиг: {vote_average}
              <MovieStars voteAverage={vote_average} />
            </Text>
          </View>
        </TouchableOpacity>
        {isExist(item, bookmarksList) ? (
          <BtnRemoveFromBookmark />
        ) : (
          <BtnAddBookmark />
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={stateMovies}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => scrollLoadMore()}
        onEndReachedThreshold={1}
        ListFooterComponent={() => <MovieIndicator />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  movieItem: {
    width: windowWidth - 40,
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    height: windowHeight / 2,
    marginVertical: 8,
    paddingBottom: 22,
  },

  infoTitle: {
    alignItems: 'center',
  },

  infoTitleText: {
    marginLeft: 30,
    marginRight: 30,
    fontSize: 19,
    color: COLORS.GREY,
  },

  infoTitleDate: {
    fontSize: 12,
    color: COLORS.GREY,
  },

  movieImage: {
    resizeMode: 'contain',
    marginTop: 5,
    height: '75%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  infoRaite: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  infoRaiteText: {
    color: COLORS.GREY,
    fontSize: 18,
  },

  BtnBookmark: {
    backgroundColor: COLORS.GREEN,
    width: '100%',
    height: windowHeight / 18,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textAddBookMark: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },

  bookmark: {
    // marginLeft: 300,
    right: 100,
    justifyContent: 'flex-end',
    position: 'absolute',
  }
});

export default MovieList;

