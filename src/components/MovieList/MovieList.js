import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Stars from 'react-native-stars';
import {
  addToBookmarks,
  removeFromBookmarks,
} from '../../redux/actions/moviesActions';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import MovieIndicator from '../ui/MovieIndicator';
import {IMAGE_URL} from '../../utilities/apiUrl';
import {COLORS} from '../../utilities/colors';
import {isExist} from '../../utilities/funcHelpers';

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
          style={styles.btnAddBookmarkFalse}
          onPress={() => dispatch(addToBookmarks(item))}>
          <Text style={styles.textAddBookMark}>Добавить в закладки</Text>
        </TouchableOpacity>
      );
    };

    const BtnRemoveFromBookmark = () => {
      return (
        <TouchableOpacity
          style={styles.btnAddBookmarkTrue}
          onPress={() => dispatch(removeFromBookmarks(item))}>
          <Text style={styles.textAddBookMark}>Удалить из закладок</Text>
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
              <Stars
                default={vote_average}
                count={10}
                spacing={vote_average}
                starSize={12}
                half={true}
                fullStar={require('../../images/starFilled.png')}
                emptyStar={require('../../images/starEmpty.png')}
                halfStar={require('../../images/starHalf.png')}
                disabled={true}
              />
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
    width: Dimensions.get('screen').width - 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    height: Dimensions.get('screen').height / 2,
    marginVertical: 10,
    paddingBottom: 15,
  },

  infoTitle: {
    alignItems: 'center',
  },
  infoTitleText: {
    marginLeft: 30,
    marginRight: 30,
    fontSize: 20,
    color: 'grey',
  },
  infoTitleDate: {
    fontSize: 14,
    color: 'grey',
  },

  movieImage: {
    resizeMode: 'contain',
    marginTop: 10,
    height: '75%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  infoRaite: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  infoRaiteText: {
    color: 'grey',
    fontSize: 18,
  },

  btnAddBookmarkTrue: {
    backgroundColor: COLORS.GREEN,
    width: '100%',
    height: Dimensions.get('screen').height / 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAddBookmarkFalse: {
    backgroundColor: COLORS.MAIN_COLOR,
    width: '100%',
    height: Dimensions.get('screen').height / 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textAddBookMark: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default MovieList;
