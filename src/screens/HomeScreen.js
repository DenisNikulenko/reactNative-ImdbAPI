import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {useDispatch} from 'react-redux';
import {getPopularMovies} from '../services/movieServices';
import {clearData} from '../redux/actions/authActions';
import {logaut} from '../services/authServices';

import MovieList from '../components/MovieList';
import MovieIndicator from '../components/ui/MovieIndicator';
import {COLORS} from '../utilities/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const [isReady, setIsReady] = useState(true);
  const [page, setPage] = useState(1);
  const [popularMovie, setPopularMovie] = useState([]);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    fetchAPI(page);
    
    navigation.setOptions({
      headerRight: () => <BtnLogout />,
    });

    // return () => dispatch(clearData());
  }, [page, navigation]);

  const fetchAPI = async (page) => {
    setPopularMovie([...popularMovie, ...(await getPopularMovies(page))]);
    setIsReady(false);
  };

  const scrollLoadMore = () => {
    setPage(page + 1);
  };

  const BtnLogout = () => (
    <TouchableOpacity onPress={() => {
      // dispatch(clearData());
      logaut();
    }}>
      <Ionicons style={styles.iconLogout} name="exit-outline" size={30} />
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, isReady ? {backgroundColor: 'white'} : null]}>
      {isReady ? (
        <MovieIndicator />
      ) : (
        <MovieList stateMovies={popularMovie} scrollLoadMore={scrollLoadMore} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_GREY,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconLogout: {
    color: 'white',
    marginRight: 10,
  },
});

export default HomeScreen;
