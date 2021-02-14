import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {useSelector, useDispatch} from "react-redux";


import {addToBookmarks,removeFromBookmarks} from '../redux/actions/moviesActions';


const BookmarksScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Bookmarks Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BookmarksScreen;
