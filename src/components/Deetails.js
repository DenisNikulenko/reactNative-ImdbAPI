import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {IMAGE_URL} from '../utilities/apiUrl';
import {AppButton} from '../components/ui/AppButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {THEME} from '../utilities/theme';
import {useNavigation} from '@react-navigation/native';

export const Details = ({movieDetails}) => {
  const [container, setcontainer] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    setcontainer({...movieDetails});
  }, [movieDetails]);
  console.log(container);

  const {
    backdrop_path,
    belongs_to_collection,
    budget,
    genres,
    id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    production_companies,
    production_countries,
    release_date,
    revenue,
    runtime,
    spoken_languages,
    status,
    tagline,
    // title,
    video,
    vote_average,
    vote_count,
  } = container;

  let title = movieDetails.title;

  typeof title === "string" ? title.length > 30 ? title = `${title.substr(0,29)}` : null : null

  return (
    <ScrollView style={styles.container}>
      <View >
        <ImageBackground
          resizeMethod="scale"

          style={styles.image}
          source={{
            uri: `${IMAGE_URL}/${poster_path}`,
          }}
        />
        <View style={styles.headerOpacitty}></View>
          <View style={styles.title}>
            <TouchableOpacity
              style={styles.buttonBack}
              activeOpacity={0.2}
              onPress={() => navigation.goBack()}>
              <Ionicons
                onPress={() => navigation.goBack()}
                style={{color: "white", width:50, height:50}}
                name="return-down-back"
                size={40}
              />
            </TouchableOpacity>
              <Text style={styles.textTitle}>{title}</Text>
            </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  headerOpacitty: {
    backgroundColor: "black",
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 20,
    opacity: .3,
  },
  title: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: Dimensions.get('screen').width,
  },
  image: {
    resizeMode: "cover",
    borderRadius: 5,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 2,
  },

  buttonBack: {
    height: Dimensions.get('screen').height / 18,
    width: Dimensions.get('screen').width / 8,
    marginLeft: 5,

  },
  textTitle: {
    marginRight: 8,
    color: "white",
    fontSize: 24,
  }
});
