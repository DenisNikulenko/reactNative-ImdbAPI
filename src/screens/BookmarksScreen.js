import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, TextInput, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromBookmarks} from '../redux/actions/moviesActions';

import {COLORS} from '../utilities/colors';
import {windowWidth} from '../utilities/dimensions';
import MovieBookmarkCard from '../components/MovieBookmarkCard';

const BookmarksScreen = () => {
  const dispatch = useDispatch();
  const bookmarksList = useSelector(
    ({moviesReducer}) => moviesReducer.bookmarksList,
  );
  
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [filteredBookmarkList, setFilterBookmarkList] = useState([]);

  useEffect(() => {}, [isSearchActive]);

  const onChangeSearch = (text) => {
    if (text.length > 2 && text !== '') {
      const searchText = text.trim().replace(/""/g, '');

      setIsSearchActive(true);

      setFilterBookmarkList(
        bookmarksList.filter((movie) => {
          return (
            movie.title.toLowerCase().search(searchText.toLowerCase()) !== -1
          );
        }),
      );
    } else {
      setIsSearchActive(false);
    }
  };

  const currentMovies = isSearchActive ? filteredBookmarkList : bookmarksList;

  return (
    <View style={styles.container}>
      <View style={styles.searchBlock}>
        <TextInput
          onChangeText={onChangeSearch}
          style={styles.searchInput}
          placeholder="Введите название фильма..."
          maxLength={64}
        />
      </View>
      <View>
        {bookmarksList.length ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={currentMovies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
              <MovieBookmarkCard
                item={item}
                onPressBtn={() => dispatch(removeFromBookmarks(item))}
                costumeStyle={styles.movieCardBtn}
                iconName="trash-outline"
                iconColor="white"
                iconSize={26}
              />
            )}
          />
        ) : (
          <View style={styles.textNoItems}>
            <Text>Добавьте в закладки, чтобы что-то тут увидеть.</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 40,
  },

  header: {
    fontWeight: 'bold',
    color: COLORS.MAIN_COLOR,
  },

  searchInput: {
    padding: 10,
    backgroundColor: COLORS.WHITE,
    borderBottomColor: COLORS.MAIN_COLOR,
    borderBottomWidth: 2,
    borderBottomRightRadius: 20,
    width: windowWidth - 10,
    height: 55,
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
  textNoItems: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default BookmarksScreen;
