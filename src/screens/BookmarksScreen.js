import React from 'react';
import {View, StyleSheet, FlatList, TextInput, Dimensions} from 'react-native';

import {useSelector} from 'react-redux';
import {useDispatch} from "react-redux";
import {removeFromBookmarks, searchByName} from "../redux/actions/moviesActions";

import AppCardPreviewMovie from '../components/ui/AppCardPreviewMovie';
import {COLORS} from "../utilities/colors";

const BookmarksScreen = () => {
  const moviesReducer = useSelector((state) => state.moviesReducer);

  const {bookmarksList, filteredBookmarkList, isSearchActive} = moviesReducer;
	const dispatch = useDispatch();
  
  const currentMovies = isSearchActive ? filteredBookmarkList : bookmarksList

  const onChange = (text) => {
    const searchText = text.trim().replace(/""/g, "")
    searchByName(searchText)(dispatch);
  }

  return (
    <View style={styles.container}>
        <View style={styles.searchBlock}>
        <TextInput
          onChangeText={onChange}
          style={styles.searchInput}
          placeholder="Введите название фильма..."
          maxLength={64}
          />
      </View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={currentMovies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) =>  
            <AppCardPreviewMovie
              item={item}
              onPressBtn={() => dispatch(removeFromBookmarks(item))}
              costumeStyle={styles.movieCardBtn}
              iconName="trash-outline" 
              iconColor="white" 
              iconSize={26} />}
        />
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
    color: 'red',
  },

  searchInput: {
    padding: 10,
    backgroundColor: COLORS.WHITE,
    borderBottomColor: COLORS.MAIN_COLOR,
    borderBottomWidth: 2,
    borderBottomRightRadius: 20,
    width: Dimensions.get("screen").width - 10,
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
});

export default BookmarksScreen;
