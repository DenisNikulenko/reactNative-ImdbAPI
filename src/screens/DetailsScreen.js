import React, {useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchDetailsMovie, fetchActors} from '../redux/actions/moviesActions';

import {Details} from '../components/Details';
import AppIndicator from "../components/ui/AppIndicator";

const MovieDetails = ({route}) => {
  const dispatch = useDispatch();
  const moviesReducer = useSelector((state) => state.moviesReducer);

  const {detailsMovie, isFetching, actors} = moviesReducer;
  const id = route.params.id;
  console.log(id)
  useEffect(() => {
    dispatch(fetchDetailsMovie(id));
    dispatch(fetchActors(id))
  },[]);

  if (isFetching) {
    return  (
      <AppIndicator />
    );
  } else {
    return (
      <View style={styles.container}>
        <View>
          <Details detailsMovie={detailsMovie} castActors={actors} />
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
