import React from 'react';
import {ScrollView, View, Text, StyleSheet, Dimensions} from 'react-native';

import MovieDetailsImage from './MovieDetailsImage';
import MovieDetailsActors from './MovieDetailsActors';
import {COLORS} from '../../utilities/colors';

const MovieDetails = ({movieDetails, movieDetailsActors}) => {
  let {overview} = movieDetails;
  const {title, poster_path, runtime, vote_average} = movieDetails;

  overview.length < 5 ? (overview = 'нет описания :(') : null;

  return (
    <ScrollView style={styles.container}>
      <MovieDetailsImage
        movieDetails={movieDetails}
        posterPath={poster_path}
        title={title}
        voteAverage={vote_average}
        runtime={runtime}
      />

      <View style={styles.text}>
        <Text style={styles.textPreview}>Описание: </Text>
        <Text style={styles.textOverview}>{overview}</Text>
      </View>

      <MovieDetailsActors movieDetailsActors={movieDetailsActors} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    width: Dimensions.get('screen').width,
    padding: 12,
    backgroundColor: COLORS.LIGHT_GREY,
    borderBottomRightRadius: 60,
  },

  textPreview: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    borderLeftWidth: 1,
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderColor: COLORS.MAIN_COLOR,
    width: 200,
  },

  textOverview: {
    color: 'black',
    fontSize: 16,
    marginTop: 5,
  },
});

export default MovieDetails;
