import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchDetailsMovie, fetchActors} from '../redux/actions/moviesActions';

import MovieDetails from '../components/MovieDetails';
import MovieIndicator from "../components/ui/MovieIndicator";

const DetailsScreen = ({route}) => {
  const dispatch = useDispatch();
  const moviesReducer = useSelector((state) => state.moviesReducer);

  const {detailsMovie, isFetching, actors} = moviesReducer;
  const id = route.params.id;

  useEffect(() => {
    dispatch(fetchDetailsMovie(id));
    dispatch(fetchActors(id))
  },[]);

  if (isFetching) {
    return  (
      <MovieIndicator />
    );
  } else {
    return (
      <View style={styles.container}>
        <View>
          <MovieDetails detailsMovie={detailsMovie} castActors={actors} />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 100
  }
});

export default DetailsScreen;
