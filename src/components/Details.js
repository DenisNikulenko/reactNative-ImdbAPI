import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import AppImageDetails from "../components/ui/AppImageDetails";

import {THEME} from '../utilities/theme';

export const Details = ({movieDetails}) => {
  const [container, setContainer] = useState({});

  useEffect(() => {
    setContainer({...movieDetails});
  }, [movieDetails]);

  let {title, overview, budget} = movieDetails;
  let genre;
  const {
    // budget,
    genres,
    id,
    // overview,
    poster_path,
    release_date,
    runtime,
    vote_average,
  } = container;

  typeof title === 'string' ? title.length > 30 ? (title = `${title.substr(0, 29)}`) : null : null;
  overview.length < 5 ? overview = "нет описания :(" : null;
  
  genres ? (genre = genres.map((g) => (
        <View key={g.id}>
          <Text style={styles.descriptioninfoText}>{g.name}</Text>
        </View>
  ))) : (genre = <Text>Пусто</Text>);

  return (
    <ScrollView style={styles.container}>
      <AppImageDetails posterPath={poster_path} title={title} voteAverage={vote_average} runtime={runtime} />

      <View style={styles.description}>
        <View style={styles.descriptionText}>
          <Text style={styles.descriptionTextPreview}>Описание: </Text>
          <Text style={{color:"white", fontSize: 18, marginTop: 7}}>{overview}</Text>
        </View>
        <View style={styles.descriptioninfo}>
          <View>
            <Text style={styles.descriptioninfoText}><Text style={styles.textBold}>Релиз:</Text> {release_date}</Text>
            <Text style={styles.descriptioninfoText}><Text style={styles.textBold}>Бюджет:</Text> {budget} $</Text>
          </View>
          <View>
            {genre}
          </View>
        </View>
      </View>
    </ScrollView>
  )
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height - 110,
  },

  description: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
    borderLeftColor: 
    THEME.MAIN_COLOR,
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
  }

})