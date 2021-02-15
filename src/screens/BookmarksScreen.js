import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import {useSelector} from 'react-redux';
import {useDispatch} from "react-redux";
import {removeFromBookmarks} from "../redux/actions/moviesActions"

import AppCardPreviewMovie from '../components/ui/AppCardPreviewMovie';
import {THEME} from "../utilities/theme";

const BookmarksScreen = () => {
  const bookMarksList = useSelector((state) => state.moviesReducer.bookmarksList);
	const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
      <Text style={styles.header}>И</Text>збраное:
      </Text>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={bookMarksList}
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

  textTitle: {
    fontSize: 26,
    color: 'grey',
  },
  
  movieCardBtn: {
    flex: 2,
    height: '100%',
    backgroundColor: THEME.MAIN_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default BookmarksScreen;
