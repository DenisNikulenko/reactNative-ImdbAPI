import React, {useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

import AppImageDetails from "../components/ui/AppImageDetails";
import AppActorsDetails from "./ui/AppActorsDetails";
import {THEME} from '../utilities/theme';

export const Details = ({detailsMovie, castActors, crewActors}) => {
  // useEffect(() => {
  // }, [detailsMovie]);

  let {title, overview, budget, genre} = detailsMovie;
  const {
    genres,
    poster_path,
    release_date,
    runtime,
    vote_average,
  } = detailsMovie;

  typeof title === 'string' ? title.length > 30 ? (title = `${title.substr(0, 29)}`) : null : null;
  typeof overview === "string" ? overview.length < 5 ? overview = "нет описания :(" : null : null

  genres ? (genre = genres.map((g, indx) => (
        <View key={g.indx}>
          <Text style={styles.descriptioninfoText}>{g.name}</Text>
        </View>
  ))) : (genre = <Text>Пусто</Text>);

  return (
    <View style={styles.container}>
      <AppImageDetails posterPath={poster_path} title={title} voteAverage={vote_average} runtime={runtime} />

      {/* <View>
        <View style={styles.descriptionText}>
          <Text style={styles.descriptionTextPreview}>Описание: </Text>
          <Text style={{color:"white", fontSize: 18, marginTop: 7}}>{overview}</Text>
        </View>

        <View style={styles.descriptioninfo}>

          <View>
            <Text style={styles.descriptioninfoText}><Text style={styles.textBold}>Релиз:</Text>{release_date}</Text>
            <Text style={styles.descriptioninfoText}><Text style={styles.textBold}>Бюджет:</Text>{budget} $</Text>
          </View>

          <View>
            {genre}
          </View>

        </View>
      </View> */}
        <AppActorsDetails castActors={castActors}  crewActors={crewActors} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height - 100,
  },

  descriptionText:{
    width: Dimensions.get('screen').width,
    padding: 12,
    backgroundColor: "#b3b3b3",
    borderTopRightRadius: 60,
  },

  descriptionTextPreview: {
    color:"white", 
    fontWeight: "bold", 
    fontSize: 24, 
    borderLeftColor: THEME.MAIN_COLOR,
    borderLeftWidth: 1, 
    paddingLeft: 5, 
    borderBottomWidth: 1, 
    borderColor: THEME.MAIN_COLOR, 
    width: 120,
  },

  descriptioninfo: {
    width: Dimensions.get('screen').width,
    padding: 12,
    backgroundColor: "#b3b3b3",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  descriptioninfoText: {
    color: "white"
  },

  textBold: {
    fontWeight: "bold",
    fontSize: 20
  },

})