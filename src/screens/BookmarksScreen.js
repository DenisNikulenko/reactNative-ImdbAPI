import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const BookmarksScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Bookmarks Screen</Text>
      {/* <Button
        title="Go to Bookmarks"
        onPress={() => navigation.navigate('Home')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default BookmarksScreen;
