import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {getPopularMovies} from '../services/movieServices';

import MovieList from '../components/MovieList';
import MovieIndicator from '../components/ui/MovieIndicator';
import {COLORS} from '../utilities/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const [isReady, setIsReady] = useState(true);
  const [page, setPage] = useState(1);
  const [popularMovie, setPopularMovie] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    fetchAPI(page);
    navigation.setOptions({
      headerRight: () => (
         <BtnLogOut /> 
      )
    })
  }, [page, navigation]);

  const fetchAPI = async (page) => {
    setPopularMovie([...popularMovie, ...(await getPopularMovies(page))]);
    setIsReady(false);
  };

  
  const BtnLogOut = () => (
    <TouchableOpacity
      onPress={() => {        
      }}>
      <Ionicons style={styles.iconLogOut} name="exit-outline" size={30} />
    </TouchableOpacity>
  );

  const scrollLoadMore = () => {
    setPage(page + 1);
  };

  if (isReady) {
    return <MovieIndicator />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' hidden = {false} backgroundColor = {COLORS.MAIN_COLOR} />
        <MovieList
          stateMovies={popularMovie}
          scrollLoadMore={scrollLoadMore}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.GREY,
  },
  iconLogOut: {
    color: 'white',
    marginRight: 10,
  }
});

export default HomeScreen;
