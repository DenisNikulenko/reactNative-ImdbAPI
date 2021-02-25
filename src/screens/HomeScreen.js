import React, {useState, useEffect} from 'react';
import {View, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {getPopularMovies} from '../services/movieServices';
import {logaut} from '../services/authServices';

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
      headerRight: () => <BtnLogout />,
    });
  }, [page, navigation]);

  const fetchAPI = async (page) => {
    setPopularMovie([...popularMovie, ...(await getPopularMovies(page))]);
    setIsReady(false);
  };

  const scrollLoadMore = () => {
    setPage(page + 1);
  };

  const BtnLogout = () => (
    <TouchableOpacity onPress={() => logaut()}>
      <Ionicons style={styles.iconLogout} name="exit-outline" size={30} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isReady ? (
        <MovieIndicator />
      ) : (
        <View>
          <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor={COLORS.MAIN_COLOR}
          />
          <MovieList
            stateMovies={popularMovie}
            scrollLoadMore={scrollLoadMore}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_GREY,
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.GREY,
  },
  
  iconLogout: {
    color: 'white',
    marginRight: 10,
  },
});

export default HomeScreen;
