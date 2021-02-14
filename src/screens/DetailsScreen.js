import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchDetailsMovie} from '../redux/actions/moviesActions';

import {Details} from '../components/Deetails';

const MovieDetails = ({route}) => {
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.moviesReducer.detailsMovie);

  useEffect(() => {
    const id = route.params.id;
    dispatch(fetchDetailsMovie(id));
  }, []);

  let title = route.params.title;

  title.length > 10 ? (title = `${title.substr(0, 30)}`) : null;

  return (
    <View>
      <View>
        <Details movieDetails={movieDetails} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: THEME.LIGHT_GREY,
  //   paddingHorizontal: 20,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // },
  // title: {
  //   marginLeft: 10,
  //   color: THEME.GREY,
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
});

export default MovieDetails;
