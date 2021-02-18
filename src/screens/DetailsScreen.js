import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MovieDetails from '../components/MovieDetails';
import MovieIndicator from '../components/ui/MovieIndicator';
import {getMovieDetails, getMovieActors} from '../services/movieServices';

const DetailsScreen = ({route}) => {
  const [isReady, setIsReady] = useState(true);
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieDetailsActors, setMovieDetailsActors] = useState([]);
  const id = route.params.id;

  useEffect(() => {
    fetchAPI(id);
  }, [id]);

  const fetchAPI = async (id) => {
    setMovieDetails(await getMovieDetails(id));
    setMovieDetailsActors(await getMovieActors(id));
    setIsReady(false);
  };
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
});

export default DetailsScreen;
