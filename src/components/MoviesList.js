import React from 'react';
import {SafeAreaView, StyleSheet, FlatList, View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';

import {IMAGE_URL} from "../utilities/apiUrl"

const MoviesList = ({stateMovies}) => {
  //movie.title
  console.log(stateMovies);

  // const Item = ({item, onPress, style}) => (
  //   <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
  //     <Text style={styles.title}>{item.title}</Text>
  //   </TouchableOpacity>
  // );

  const renderItem = ({item}) => {
    return ( 
      <View style={styles.movieItem}>
       <TouchableOpacity
        onPress={() => console.log(`id:${item.id}`)} >
         <Text>{item.title}</Text>
         <Image
         style={{ 
          display: 'flex',
          marginTop: 10, 
          width: Dimensions.get('screen').width / 1.5, 
          height: '90%',  
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,                                   
          }} 
            source={{
              uri:`${IMAGE_URL}/w600_and_h900_bestv2/${item.backdrop_path}`
            }} />
       </TouchableOpacity>
      </View>
    );
  };
  //https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png
  //`${IMAGE_URL}/w600_and_h900_bestv2/${item.backdrop_path}&append_to_response=backdrop_path`

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={stateMovies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  movieItem: {
    display: 'flex',
    flexDirection: 'column',
    width: Dimensions.get('screen').width / 1.1 - 10,
    backgroundColor: '#FFF',
    borderRadius: 20,
    height:  Dimensions.get('screen').height / 2 - 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  }
});

export default MoviesList;
