import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

import MovieDetailsImage from "./MovieDetailsImage";
import MovieDetailsActors from "./MovieDetailsActors";
import {COLORS} from '../../utilities/colors';

const MovieDetails = ({movieDetails, movieDetailsActors}) => {
  let {overview} = movieDetails;
  const {
    title,
    poster_path,
    runtime,
    vote_average,
  } = movieDetails;

   overview.length < 5 ? overview = "нет описания :(" : null;

  return (
    <ScrollView style={styles.container}>
      <MovieDetailsImage movieDetails={movieDetails} posterPath={poster_path} title={title} voteAverage={vote_average} runtime={runtime} />

          <View style={styles.descriptionText}>
            <Text style={styles.descriptionTextPreview}>Описание: </Text>
            <Text style={{color:"white", fontSize: 18, marginTop: 7}}>{overview}</Text>
          </View>

        <MovieDetailsActors movieDetailsActors={movieDetailsActors} />
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  descriptionText:{
    width: Dimensions.get('screen').width,
    padding: 12,
    backgroundColor: COLORS.GREY,
    borderBottomRightRadius: 60,
  },

  descriptionTextPreview: {
    color:"white", 
    fontWeight: "bold", 
    fontSize: 22, 
    borderLeftWidth: 1, 
    paddingLeft: 5, 
    borderBottomWidth: 1, 
    borderColor: COLORS.MAIN_COLOR, 
    width: 200,
  },
});

export default MovieDetails;