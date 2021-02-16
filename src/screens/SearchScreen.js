import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity, Dimensions, FlatList} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {fetchSearchMovies} from "../redux/actions/moviesActions";

import {useNavigation} from '@react-navigation/native';
import {addToBookmarks} from "../redux/actions/moviesActions";

import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../utilities/colors';
import AppIndicator from "../components/ui/AppIndicator";
import AppCardPreviewMovie from '../components/ui/AppCardPreviewMovie';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const {isFetching, searchData} = useSelector(state => state.moviesReducer)
  const navigation = useNavigation()

  const [valueSearch, setValueSearch] = useState("")
  
  useEffect(()=> {
    if(valueSearch !== "" && valueSearch.length > 3) {
      dispatch(fetchSearchMovies(valueSearch));
    }
  },[valueSearch])

  return (
    <View style={styles.conteainer}>
      <View style={styles.searchBlock}>

        <TextInput
          value={valueSearch}
          onChangeText={setValueSearch}
          style={styles.searchInput}
          placeholder="Введите название фильма..."
          maxLength={64}
          />
        <TouchableOpacity style={styles.serchBtn} onPress={() => dispatch(fetchSearchMovies(title))}>
          <Ionicons name="search" color={COLORS.MAIN_COLOR} size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentBlock}>
        { isFetching ? 
          <AppIndicator /> : 
            <View>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={searchData}
                keyExtractor={(item,idx) => idx.toString()}
                renderItem={({item}) =>  
                  <AppCardPreviewMovie 
                    item={item} 
                    onPressNavigation={() => navigation.navigate('Details', {id,title})}
                    onPressBtn={() => dispatch(addToBookmarks(item))}
                    iconName="star-sharp" 
                    iconColor="white" 
                    iconSize={30} />
                }
              />
            </View>
        }
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
    backgroundColor: COLORS.LIGHT_GREY,
    borderTopEndRadius: 15
  },

  searchInput: {
    padding: 10,
    backgroundColor: COLORS.WHITE,
    borderBottomColor: COLORS.MAIN_COLOR,
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
  }
});

export default SearchScreen;