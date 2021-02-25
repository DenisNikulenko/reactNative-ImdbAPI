import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

import MovieDetailsImage from './MovieDetailsImage';
import MovieDetailsActors from './MovieDetailsActors';

import {windowWidth} from '../../utilities/dimensions';
import {COLORS} from '../../utilities/colors';

const MovieDetails = ({movieDetails, movieDetailsActors, movieTrailer}) => {
  let {overview} = movieDetails;
  const {
    title,
    poster_path,
    runtime,
    vote_average,
    genres,
    production_companies,
  } = movieDetails;

  const Genre = genres.map((item, idx) => (
    <Text style={styles.textOverview}>
      {idx + 1}. {item.name}
    </Text>
  ));
  
  const ProductionCompany = production_companies.map((item, idx) => (
    <Text style={styles.textOverview}>
      {idx + 1}. {item.name}
    </Text>
  ));

  overview.length < 5 ? (overview = 'нет описания :(') : null;

  return (
    <ScrollView style={styles.container}>
      <MovieDetailsImage
        movieDetails={movieDetails}
        movieTrailer={movieTrailer}
        posterPath={poster_path}
        title={title}
        voteAverage={vote_average}
        runtime={runtime}
      />
      <View>
        <View style={styles.text}>
          <Text style={styles.textTitle}>Описание: </Text>
          <Text style={styles.textOverview}>{overview}</Text>
        </View>
        <View style={styles.blockDetails}>
          <View>
            <Text style={styles.textTitle}>Жанры:</Text>
            {Genre}
          </View>
          <View>
            <Text style={styles.textTitle}>Компании:</Text>
            {ProductionCompany}
          </View>
        </View>
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
    width: windowWidth,
    padding: 12,
    backgroundColor: COLORS.LIGHT_GREY,
    borderBottomRightRadius: 60,
  },

  textPreview: {
    color: COLORS.BLACK,
    fontWeight: 'bold',
    fontSize: 20,
    borderLeftWidth: 1,
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderColor: COLORS.MAIN_COLOR,
    width: 200,
  },

  textOverview: {
    color: COLORS.BLACK,
    fontSize: 16,
    marginTop: 5,
  },

  blockDetails: {
    width: windowWidth,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopColor: COLORS.MAIN_COLOR,
    borderTopWidth: 1,
    backgroundColor: COLORS.LIGHT_GREY,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textTitle: {
    fontSize: 19,
    borderColor: COLORS.MAIN_COLOR,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: COLORS.BLACK,
  },
});

export default MovieDetails;
