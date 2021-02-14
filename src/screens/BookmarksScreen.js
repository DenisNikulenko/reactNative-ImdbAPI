import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions} from 'react-native';
import {useSelector, useDispatch} from "react-redux";
import {addToBookmarks, removeFromBookmarks} from '../redux/actions/moviesActions';
import {IMAGE_URL} from "../utilities/apiUrl"
import Ionicons from 'react-native-vector-icons/Ionicons';


const BookmarksScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const bookMarksList = useSelector((state) => state.moviesReducer.bookmarksList);
  
  const renderItem=(({item}) =>{
    const {poster_path, title} = item;

    return (
      <View style={styles.movieCard}>
        <Image 
          style={styles.movieCardIamge}
          resizeMode="stretch" 
          source={{
            uri: `${IMAGE_URL}/${poster_path}`
          }}

        />
        <Text style={styles.movieCardTitle}>{title}</Text>
        <TouchableOpacity style={styles.movieCardBtn} onPress={() => dispatch(removeFromBookmarks(item))}>
          <Ionicons name="md-star-outline" color="white" size={26} />
        </TouchableOpacity>
      </View>
  )
  })
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Из<Text style={{fontWeight: "bold", color: "red"}}>бра</Text>ное:</Text>
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
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 40

  },
  textTitle: {
    fontSize: 26,
    color: "grey",
  },

  movieCard: {
    width: Dimensions.get("screen").width -10,
    height: 95,
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  movieCardIamge: {
    margin: 5,
    flex: 4,
    resizeMode: 'cover',
    borderRadius: 5,
    height: "90%",
    borderTopLeftRadius: 10, 
    borderBottomRightRadius: 10
  },

  movieCardTitle: {
    flex: 6, 
    padding: 10, 
    fontSize: 14
  },

  movieCardBtn: {
    flex: 2,
    height: "100%", 
    backgroundColor: "lightgreen", 
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 10, 
    borderBottomRightRadius: 10
  },

});

export default BookmarksScreen;