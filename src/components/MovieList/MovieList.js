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

const MovieList = ({stateMovies, scrollLoadMore}) => {
  const dispatch = useDispatch();
  const bookmarksList = useSelector(
    ({moviesReducer}) => moviesReducer.bookmarksList,
  );
  const navigation = useNavigation();

  const isExist = (movie) => {
    if (bookmarksList.filter((item) => item.id === movie.id).length > 0) {
      return true;
    }
    return false;
  };

  const renderItem = ({item}) => {
    const {id, release_date, poster_path, vote_average} = item;
    let {title} = item;
    title.length > 30 ? (title = `${title.substr(0, 29)}`) : null;

    return (
      <View style={styles.movieItem}>
        <TouchableOpacity onPress={() => navigation.navigate('Details', {id})}>
          <View style={styles.infoTitle}>
            <Text style={styles.infoTitleText}>{title}</Text>
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
        {isExist(item) ? (
          <TouchableOpacity
            style={styles.btnAddBookmarkTrue}
            onPress={() => dispatch(removeFromBookmarks(item))}>
            <Text style={styles.textAddBookMark}>Удалить из закладок</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.btnAddBookmarkFalse}
            onPress={() => dispatch(addToBookmarks(item))}>
            <Text style={styles.textAddBookMark}>Добавить в закладки</Text>
          </TouchableOpacity>
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
    flexDirection: 'column',
    width: Dimensions.get('screen').width / 1.1 - 10,
    backgroundColor: '#FFF',
    borderRadius: 20,
    height: Dimensions.get('screen').height / 2 - 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    paddingBottom: 15,
  },

  infoTitle: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  infoTitleText: {
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
    width: Dimensions.get('screen').width / 1.3,
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
    fontSize: 16,
    fontWeight: '600',
  },
});

export default MovieList;
