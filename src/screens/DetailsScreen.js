import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchDetailsMovie} from '../redux/actions/moviesActions';

import {Details} from '../components/Details';
import AppIndicator from "../components/ui/AppIndicator";

const MovieDetails = ({route}) => {
  const dispatch = useDispatch();
  const moviesReducer = useSelector((state) => state.moviesReducer);

  const movieDetails = moviesReducer.detailsMovie;
  const isFetching = moviesReducer.isFetching;
  const id = route.params.id;
  let content;

  useEffect(() => {
    dispatch(fetchDetailsMovie(id));
  }, [id]);

  if (isFetching) {
    return content = (
      <AppIndicator />
    );
  } else {
    return content = (
      <View style={styles.container}>
        <View>
          <Details movieDetails={movieDetails} />
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

export default MovieDetails;
