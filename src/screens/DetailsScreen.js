import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MovieDetails from '../components/MovieDetails';
import MovieIndicator from '../components/ui/MovieIndicator';
import {getMovieDetails, getMovieActors} from '../services/movieServices';

const DetailsScreen = ({route}) => {
  const id = route.params.id;
  const [isReady, setIsReady] = useState(true)
  const [movieDetails, setMovieDetails]= useState([]);
  const [movieDetailsActors, setMovieDetailsActors] = useState([]);

  useEffect(() => {
    fetchAPI(id);
  }, [id]);

  const fetchAPI = async (id) => {
    setMovieDetails(await getMovieDetails(id));
    setMovieDetailsActors(await getMovieActors(id));
    setIsReady(false)
  }

  if (isReady) {
    return <MovieIndicator />;
  } else {
    return (
      <View style={styles.container}>
        <View>
          <MovieDetails movieDetails={movieDetails} movieDetailsActors={movieDetailsActors} />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
  },
});

export default DetailsScreen;
