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

const MovieDetails = ({detailsMovie, castActors}) => {
  let {title, overview, genre} = detailsMovie;
  const {
    genres,
    poster_path,
    release_date,
    budget,
    runtime,
    vote_average,
  } = detailsMovie;

  typeof title === 'string' ? title.length > 30 ? (title = `${title.substr(0, 29)}`) : null : null;
  typeof overview === "string" ? overview.length < 5 ? overview = "нет описания :(" : null : null;

  genres ? (genre = genres.map((g, indx) => (
        <View key={indx}>
          <Text style={styles.descriptioninfoText}>{g.name}</Text>
        </View>
  ))) : (genre = <Text>Пусто</Text>);

  return (
    <ScrollView style={styles.container}>
      <MovieDetailsImage posterPath={poster_path} title={title} voteAverage={vote_average} runtime={runtime} />

          <View style={styles.descriptionText}>
            <Text style={styles.descriptionTextPreview}>Описание: </Text>
            <Text style={{color:"white", fontSize: 18, marginTop: 7}}>{overview}</Text>
          </View>

        <MovieDetailsActors castActors={castActors} />
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height - 80,
    backgroundColor: "grey",
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
    fontSize: 24, 
    borderLeftColor: COLORS.MAIN_COLOR,
    borderLeftWidth: 1, 
    paddingLeft: 5, 
    borderBottomWidth: 1, 
    borderColor: COLORS.MAIN_COLOR, 
    width: 120,
  },
});

export default MovieDetails;