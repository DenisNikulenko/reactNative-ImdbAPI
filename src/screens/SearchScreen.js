import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity, Dimensions, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchSearchMovies} from "../redux/actions/moviesActions";
import {useNavigation} from '@react-navigation/native';
import {addToBookmarks} from "../redux/actions/moviesActions";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { THEME } from '../utilities/theme';
import AppIndicator from "../components/ui/AppIndicator";
import AppCardPreviewMovie from '../components/ui/AppCardPreviewMovie';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.moviesReducer.isFetching)
  const searchData = useSelector((state) => state.moviesReducer.searchData);
  const navigation = useNavigation()

  const [value, setValue] = useState("")

  useEffect(()=> {
    if(value !== "") {
      dispatch(fetchSearchMovies(value));
    }
  },[value])

  return (
    <View style={styles.conteainer}>
      <View style={styles.searchBlock}>

        <TextInput
          value={value}
          onChangeText={setValue}
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
                renderItem={({item}) =>  
                  <AppCardPreviewMovie 
                    item={item} 
                    onPressNavigation={() => navigation.navigate('Details', {id,title})}
                    onPressBtn={() => dispatch(addToBookmarks(item))}
                    iconName="star-sharp" 
                    iconColor="white" 
                    iconSize={30} />}
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
    marginBottom: 60,
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