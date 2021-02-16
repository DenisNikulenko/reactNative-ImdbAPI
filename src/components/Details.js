import React, {useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView
} from 'react-native';

import AppImageDetails from "../components/ui/AppImageDetails";
import { IMAGE_URL } from '../utilities/apiUrl';
import {THEME} from '../utilities/theme';

export const Details = ({detailsMovie, castActors, crewActors}) => {
  console.log(castActors)
  useEffect(() => {
  }, [detailsMovie]);

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

  const renderItem = ({item}) => {
    return (
      <View style={{width: 100, justifyContent: "center", flexDirection: "row"}}>
        <Image 
            style={styles.image}
            source={{
              uri: `${IMAGE_URL}${item.profile_path}`,
            }}
            />
        <Text>
          {item.name}
        </Text>

      </View>
    )
  }
  
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
            <Text style={styles.descriptioninfoText}><Text style={styles.textBold}>Релиз:</Text>{release_date}</Text>
            <Text style={styles.descriptioninfoText}><Text style={styles.textBold}>Бюджет:</Text>{budget} $</Text>
          </View>
          <View>
            {genre}
          </View>
        </View>
      </View>
      <SafeAreaView>
        <FlatList
          showsVerticalScrollIndicator={true} 
          data={castActors}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} />
      </SafeAreaView>
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
    marginTop: 5,
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
  },

  image: {
    resizeMode: 'contain',
    marginTop: 10,
    width: Dimensions.get('screen').width / 1.3,
    height: '75%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
})