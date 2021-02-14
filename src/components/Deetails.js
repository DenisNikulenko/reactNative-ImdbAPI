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
  typeof title === 'string'
    ? title.length > 30
      ? (title = `${title.substr(0, 29)}`)
      : null
    : null;

  let genre;
  genres
    ? (genre = genres.map((g) => (
        <View key={g.id}>
          <Text style={{}}>{g.name}</Text>
        </View>
      )))
    : (genre = <Text>Пусто</Text>);

  return (
    <ScrollView style={styles.container}>

      <View>
          <ImageBackground
            resizeMethod="scale"
            style={styles.image}
            source={{
              uri: `${IMAGE_URL}/${poster_path}`,
            }}
          />

          <View style={styles.opacityBlockTop}></View>
          <View style={styles.title}>
            <TouchableOpacity
              style={styles.buttonBack}
              activeOpacity={0.2}
              onPress={() => navigation.goBack()}>
              <Ionicons
                onPress={() => navigation.goBack()}
                style={{color: 'white', width: 50, height: 50}}
                name="return-down-back"
                size={40}
              />
            </TouchableOpacity>
            <Text style={styles.textTitle}>{title}</Text>
          </View>
          

          <View style={styles.opacityBlockBottom}></View>
          <View style={styles.descriptionBlockBottom}>
            <Text style={{color: 'white', fontSize: 16}}>
              Рейтинг: <Text style={styles.textBold}>{vote_average}</Text>
            </Text>
            <Text style={{color: 'white'}}>
              Длительность: <Text style={styles.textBold}>{runtime}</Text> мин
            </Text>
          </View>

          <View style={styles.descriptionBlockOverview}>
            <View style={styles.descriptionBlockOverviewText}>
              <Text style={styles.textBold}>Описание</Text>
              <Text>{overview}</Text>
            </View>
            <View style={styles.descriptionBlockOverviewGenres}>
              <Text style={styles.descriptionBlockOverviewRelease}>
                <Text style={{...styles.textBold}}>Резил:</Text> {release_date}{' '}
              </Text>
              <Text style={{...styles.textBold, paddingBottom: 5}}>Жанры:</Text>
              {genre}
              <Text style={styles.descriptionBlockOverviewBudget}>
                <Text style={{...styles.textBold}}>Бюджет:</Text>
                {budget}$
              </Text>
            </View>
          </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  opacityBlockTop: {
    backgroundColor: 'black',
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 20,
    opacity: 0.3,
  },
  title: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
  },
  image: {
    resizeMode: 'cover',
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
    color: 'white',
    fontSize: 24,
  },

  opacityBlockBottom: {
    backgroundColor: 'black',
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 20,
    opacity: 0.3,
    top: Dimensions.get('screen').width / 1.08,
  },

  descriptionBlockBottom: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    top: Dimensions.get('screen').width / 1.08 + 10,
  },

  test: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
  },

  descriptionRaite: {
    color: 'white',
  },
  descriptionTime: {},

  textBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  descriptionBlockOverview: {
    flexDirection: 'row',
    margin: 10,
  },
  descriptionBlockOverviewText: {
    flex: 3,
  },
  descriptionBlockOverviewGenres: {
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: 'white',
    flex: 1,
  },
  descriptionBlockOverviewRelease: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    padding: 15,
  },
  descriptionBlockOverviewBudget: {
    alignItems: 'center',
    borderTopColor: 'white',
    borderTopWidth: 1,
    paddingTop: 15,
  },
});
