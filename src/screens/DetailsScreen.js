import React, {useEffect, useState, useLayoutEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import {
  addToBookmarks,
  removeFromBookmarks,
} from '../redux/actions/moviesActions';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MovieDetails from '../components/MovieDetails';
import MovieIndicator from '../components/ui/MovieIndicator';
import {getMovieDetails, getMovieActors} from '../services/movieServices';
import {isExist} from '../utilities/funcHelpers';

const DetailsScreen = ({route}) => {
  const bookmarksList = useSelector(
    ({moviesReducer}) => moviesReducer.bookmarksList,
  );
  const dispatch = useDispatch();
  
  const [isReady, setIsReady] = useState(true);
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieDetailsActors, setMovieDetailsActors] = useState([]);
  const id = route.params.id;

  const navigation = useNavigation();
    console.log(movieDetails)
  useEffect(() => {


    fetchAPI(id);
  }, [id, ]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        isExist(movieDetails, bookmarksList) ? <BtnStarTrue /> : <BtnStarFalse />
      )})
  },[navigation, movieDetails, bookmarksList])

  const fetchAPI = async (id) => {
    setMovieDetails(await getMovieDetails(id));
    setMovieDetailsActors(await getMovieActors(id));
    setIsReady(false);
  };

  const BtnStarTrue = () => (
    <TouchableOpacity
      onPress={() => dispatch(removeFromBookmarks(movieDetails))}>
      <Ionicons style={styles.iconStarGold} name="star" size={30} />
    </TouchableOpacity>
  );

  const BtnStarFalse = () => (
    <TouchableOpacity onPress={() => dispatch(addToBookmarks(movieDetails))}>
      <Ionicons style={styles.iconStarWhite} name="star" size={30} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isReady ? (
        <MovieIndicator />
      ) : (
        <MovieDetails
          movieDetails={movieDetails}
          movieDetailsActors={movieDetailsActors}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  iconStarWhite: {
    color: 'white',
    marginRight: 10,
  },

  iconStarGold: {
    color: 'gold',
    marginRight: 10,
  },
});

export default DetailsScreen;
