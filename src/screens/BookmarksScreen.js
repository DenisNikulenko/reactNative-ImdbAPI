import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import AppCardBookmark from '../components/ui/AppCardBookmark';

const BookmarksScreen = () => {
  const bookMarksList = useSelector(
    (state) => state.moviesReducer.bookmarksList,
  );

  const renderItem = ({item}) => <AppCardBookmark item={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Из<Text style={styles.header}>бра</Text>ное:
      </Text>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={bookMarksList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
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
