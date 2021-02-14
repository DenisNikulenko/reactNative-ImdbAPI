import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { THEME } from '../utilities/theme';

const SearchScreen = () => {
  return (
    <View style={styles.conteainer}>
      <View style={styles.searchBlock}>
        <TextInput
          // value={}
          onChangeText={() => console.log("hello")}
          style={styles.searchInput}
          placeholder="Введите название фильма..."
          maxLength={64}
          />
        <TouchableOpacity style={styles.serchBtn}>
          <Ionicons name="search" color={THEME.MAIN_COLOR} size={28} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentBlock}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteainer: {
    flex: 1,
    width: Dimensions.get("screen").width - 30,
    alignItems: "center",
    marginLeft: 10,
  },

  searchBlock: {
    width: Dimensions.get("screen").width - 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    borderBottomColor: THEME.GREY,
    borderBottomWidth: 1,
  },

  searchInput: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: "75%",
    height: 60,
  },

  serchBtn:{
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    width: "15%",
    height: "100%",
  },


  contentBlock: {
  }

});

export default SearchScreen;