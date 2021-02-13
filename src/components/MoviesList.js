import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground
} from 'react-native';

import Stars from 'react-native-stars';

import {IMAGE_URL} from '../utilities/apiUrl';
import { THEME } from '../utilities/theme';

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
        <TouchableOpacity onPress={() => console.log(`id:${item.id}`)}>
          <Text style={styles.movieTitle}>{item.title}</Text>
          <Image
            style={styles.movieImage}
            source={{
              uri: `${IMAGE_URL}/${item.backdrop_path}`
            }}
          />
          <View style={styles.info}>
            <Text style={styles.infoText}>
              Рейтиг: {item.vote_average} 
              <Stars
                default={item.vote_average}
                count={10}
                spacing={item.vote_average} 
                starSize={12}
                half={true}
                fullStar={require('../images/starFilled.png')}
                emptyStar={require('../images/starEmpty.png')}
                halfStar={require('../images/starHalf.png')}
                disabled={true} />
            </Text>
            {/* <Text style={styles.infoText}>
              Релиз: {item.release_date}
            </Text> */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnAddBookmark} onPress={() => {console.log("add")}} >
          <Text style={styles.textAddBookMark} >Добавить в закладки</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={false}
        data={stateMovies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  movieItem: {
    
    flexDirection: 'column',
    width: Dimensions.get('screen').width / 1.1 - 10,
    backgroundColor: '#FFF',
    borderRadius: 20,
    height: Dimensions.get('screen').height / 1.85 - 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    paddingBottom: 20
  },

  movieTitle: {
    fontSize: 26,
    color: "grey"
  },

  movieImage: {
    resizeMode: "contain",
    marginTop: 10,
    width: Dimensions.get('screen').width / 1.3,
    height: '80%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  
  info: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5
  },
  infoText: {
    color:"grey", 
    fontSize: 18
  },

  btnAddBookmark: {
    backgroundColor: THEME.MAIN_COLOR,
    width: '100%',
    height: Dimensions.get('screen').width / 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textAddBookMark: {
   color: '#FFF', 
   fontSize: 14, 
   fontWeight: '600' 
  }

});

export default MoviesList;
