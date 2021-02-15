import React, {useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchDetailsMovie} from '../redux/actions/moviesActions';

import {Details} from '../components/Details';
import AppIndicator from "../components/ui/AppIndicator";

const MovieDetails = ({route}) => {
  const dispatch = useDispatch();
  const moviesReducer = useSelector((state) => state.moviesReducer);

  const {detailsMovie, isFetching} = moviesReducer;

  const id = route.params.id;


  useEffect(() => {
    dispatch(fetchDetailsMovie(id));
  }, [id]);

  if (isFetching) {
    return  (
      <AppIndicator />
    );
  } else {
    return (
      <View style={styles.container}>
        <View>
          <Details detailsMovie={detailsMovie} />
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
    height: Dimensions.get("screen").height,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MovieDetails;
