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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Stars from 'react-native-stars';

import {IMAGE_URL} from '../utilities/apiUrl';
import { THEME } from '../utilities/theme';
const MoviesList = ({stateMovies}) => {
  const navigation = useNavigation(); 
  
  const renderItem = ({item}) => {
    
    return (
      <View style={styles.movieItem}>
        <TouchableOpacity onPress={() =>  navigation.navigate("Bookmarks")}>
          <View style={styles.infoTitle}>
            <Text style={styles.infoTitleText}>{item.title}</Text>
            <Text style={styles.infoTitleDate}>
              Релиз: {item.release_date}
            </Text>
          </View>
          <Image
            style={styles.movieImage}
            source={{
              uri: `${IMAGE_URL}/${item.backdrop_path}`,
            }}
          />
          <View style={styles.infoRaite}>
            <Text style={styles.infoRaiteText}>
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
                disabled={true}
              />
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnAddBookmark}
          onPress={() => {
            console.log('add');
          }}>
          <Text style={styles.textAddBookMark}>Добавить в закладки</Text>
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
    height: Dimensions.get('screen').height / 2 - 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    paddingBottom: 20
  },

  infoTitle: {
    justifyContent: "space-around",
    alignItems: "center"
  },
  infoTitleText: {
    fontSize: 20,
    color: "grey"
  },
  infoTitleDate: {
    fontSize: 14,
    color: "grey"
  },

  movieImage: {
    resizeMode: "contain",
    marginTop: 10,
    width: Dimensions.get('screen').width / 1.3,
    height: '75%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  
  infoRaite: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5
  },
  infoRaiteText: {
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
