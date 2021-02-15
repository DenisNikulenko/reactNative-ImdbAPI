import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import {useSelector} from 'react-redux';
import {useDispatch} from "react-redux";
import {removeFromBookmarks} from "../redux/actions/moviesActions"
import {useNavigation} from '@react-navigation/native';

import AppCardPreviewMovie from '../components/ui/AppCardPreviewMovie';

const BookmarksScreen = () => {
  const bookMarksList = useSelector((state) => state.moviesReducer.bookmarksList);
	const dispatch = useDispatch();
  const navigation = useNavigation()

  const {id,title} = bookMarksList[0]

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
              onPressNavigation={() => navigation.navigate('Details', {id,title})} 
              onPressBtn={() => dispatch(removeFromBookmarks(item))}
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
});

export default BookmarksScreen;
