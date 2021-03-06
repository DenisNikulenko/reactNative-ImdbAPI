import React, {useEffect, useState, useLayoutEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import {
  addToBookmarks,
  removeFromBookmarks,
} from '../redux/actions/moviesActions';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MovieDetails from '../components/MovieDetails';
import MovieIndicator from '../components/ui/MovieIndicator';
import {
  getMovieDetails,
  getMovieActors,
  getMovieTrailer,
} from '../services/movieServices';
import {isExist} from '../utilities/funcHelpers';

const DetailsScreen = ({route}) => {
  const bookmarksList = useSelector(
    ({moviesReducer}) => moviesReducer.bookmarksList,
  );
  const dispatch = useDispatch();

  const [isReady, setIsReady] = useState(true);
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieDetailsActors, setMovieDetailsActors] = useState([]);
  const [movieTrailer, setMovieTrailer] = useState('');
  const id = route.params.id;
  
  const navigation = useNavigation();

  useEffect(() => {
    fetchAPI(id);
  }, [id]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        isExist(movieDetails, bookmarksList) ? (
          <BtnStarTrue />
        ) : (
          <BtnStarFalse />
        ),
    });
  }, [navigation, movieDetails, bookmarksList]);

  const fetchAPI = async (id) => {
    setMovieDetails(await getMovieDetails(id));
    setMovieDetailsActors(await getMovieActors(id));
    setMovieTrailer(await getMovieTrailer(id));
    setIsReady(false);
  };

  const BtnStarTrue = () => (
    <TouchableOpacity
      onPress={() => {
        dispatch(removeFromBookmarks(movieDetails));
        ToastAndroid.show('Удален из закладок', 2000);
      }}>
      <Ionicons style={[styles.iconStar, {color: 'gold'}]} name="star" size={26} />
    </TouchableOpacity>
  );

  const BtnStarFalse = () => (
    <TouchableOpacity
      onPress={() => {
        dispatch(addToBookmarks(movieDetails));
        ToastAndroid.show('Добавлен в закладки', 2000);
      }}>
      <Ionicons style={styles.iconStar} name="star" size={26} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isReady ? (
        <MovieIndicator />
      ) : (
        <MovieDetails
          movieDetails={movieDetails}
          movieTrailer={movieTrailer}
          movieDetailsActors={movieDetailsActors}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  iconStar: {
    color: 'white',
    marginRight: 10,
  },
});

export default DetailsScreen;
