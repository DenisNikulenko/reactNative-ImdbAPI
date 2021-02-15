import React, {useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchDetailsMovie} from '../redux/actions/moviesActions';

import {THEME} from '../utilities/theme';
import {Details} from '../components/Details';

const MovieDetails = ({route}) => {
  const dispatch = useDispatch();
  const moviesReducer = useSelector((state) => state.moviesReducer);

  const movieDetails = moviesReducer.detailsMovie;
  const isFetching = moviesReducer.isFetching;
  const id = route.params.id;
  let content;

  console.log(id);
  console.log(isFetching);

  useEffect(() => {
    dispatch(fetchDetailsMovie(id));
  }, [id]);

  if (isFetching) {
    return content = (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" color={THEME.MAIN_COLOR} />
      </View>
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
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MovieDetails;
