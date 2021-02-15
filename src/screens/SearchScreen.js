import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity, Dimensions, Text, ActivityIndicator} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { THEME } from '../utilities/theme';

import {useSelector, useDispatch} from 'react-redux';
import {fetchSearchMovies} from "../redux/actions/moviesActions";


const SearchScreen = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.moviesReducer.isFetching)
  const searchData = useSelector((state) => state.moviesReducer.searchData.results);

  const [title, setTitle] = useState("")
  let content;
  console.log(isFetching)
  useEffect(()=> {
    dispatch(fetchSearchMovies(title));
  },[title])


  if(isFetching) {

  }

  return (
    <View style={styles.conteainer}>
      <View style={styles.searchBlock}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.searchInput}
          placeholder="Введите название фильма..."
          maxLength={64}
          />
        <TouchableOpacity style={styles.serchBtn} onPress={() => dispatch(fetchSearchMovies(title))}>
          <Ionicons name="search" color={THEME.MAIN_COLOR} size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentBlock}>
        <Text style={styles.contentBlockTitle}>У этого API только по id поиск :(</Text>
      </View>
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
    height: 60,
    backgroundColor: THEME.LIGHT_GREY,
    borderTopEndRadius: 15
  },

  searchInput: {
    padding: 10,
    backgroundColor: THEME.WHITE,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    borderBottomRightRadius: 20,
    width: "75%",
    height: 55,
  },

  serchBtn:{
    alignItems: "center",
    justifyContent: "center",
    width: "15%",
    height: "100%",
  },
  
  contentBlock: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: Dimensions.get("screen").height / 3,
  },

  contentBlockTitle: {
    fontSize: 20,
    fontWeight: "bold"
  }

});

export default SearchScreen;