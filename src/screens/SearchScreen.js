import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity, Dimensions, Text, FlatList} from 'react-native';


import {useSelector, useDispatch} from 'react-redux';
import {fetchSearchMovies} from "../redux/actions/moviesActions";

import Ionicons from 'react-native-vector-icons/Ionicons';
import { THEME } from '../utilities/theme';
import AppIndicator from "../components/ui/AppIndicator";
import AppCardPreviewMovie from '../components/ui/AppCardPreviewMovie';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.moviesReducer.isFetching)
  const searchData = useSelector((state) => state.moviesReducer.searchData.results);
  console.log(searchData)

  const [title, setTitle] = useState("")
  console.log(isFetching)
  useEffect(()=> {
    dispatch(fetchSearchMovies(title));
  },[title])


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
        { isFetching ? 
          <AppIndicator /> : 
            <View style={styles.contentBlock}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={searchData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) =>  <AppCardBookmark item={item} />}
              />
            </View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteainer: {
    flex: 1,
    width: Dimensions.get("screen").width - 10,
    height: Dimensions.get("screen").height,
    alignItems: "center",
    // marginLeft: 10,
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

  }

});

export default SearchScreen;