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
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppImageDetails from "../components/ui/AppImageDetails";

import {IMAGE_URL} from '../utilities/apiUrl';
import {THEME} from '../utilities/theme';

export const Details = ({movieDetails}) => {
  const [container, setContainer] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    setContainer({...movieDetails});
  }, [movieDetails]);

  let title = movieDetails.title;
  let genre;
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
    video,
    vote_average,
    vote_count,
  } = container;

  typeof title === 'string' ? title.length > 30 ? (title = `${title.substr(0, 29)}`) : null : null;

  return (
    <ScrollView style={styles.container}>
      <AppImageDetails posterPath={poster_path} title={title} voteAverage={vote_average} runtime={runtime} />
    </ScrollView>
  )
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    marginBottom: 45,
  },
})