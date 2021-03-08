import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, Linking} from 'react-native';

import {windowHeight, windowWidth} from '../../utilities/dimensions';
import {COLORS} from '../../utilities/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IMAGE_URL} from '../../utilities/apiUrl';

const MovieDetailsImage = ({movieDetails, movieTrailer}) => {
  const {poster_path, title, vote_average, runtime} = movieDetails;
  const trailerLink = movieTrailer ? movieTrailer : 'https://www.youtube.com';

  return (
    <View>
      <Image
        style={styles.imageHeader}
        source={{
          uri: `${IMAGE_URL}/${poster_path}`,
        }}
      />

      <View style={styles.opacityBlockTop}></View>

      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>

      <TouchableOpacity style={styles.iconPlay} onPress={() => Linking.openURL(trailerLink)}>
        <Ionicons  name='play-outline' size={70} color='white'/>
      </TouchableOpacity>

      <View style={styles.opacityBlockBottom}></View>

      <View style={styles.descriptionBottom}>
        <Text style={styles.textInfo}>
          <Ionicons name="star" color="yellow" size={18} /> {vote_average}
        </Text>
        <Text style={styles.textInfo}>
          <Ionicons name="time" color="white" size={18} /> {runtime} мин.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageHeader: {
    height: windowHeight / 2,
  },

  opacityBlockTop: {
    backgroundColor: COLORS.BLACK,
    position: 'absolute',
    width: windowWidth,
    height: 35,
    opacity: 0.3,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },

  title: {
    position: 'absolute',
    width: '90%',
    color: COLORS.WHITE,
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    marginLeft: 20,
    marginRight: 20,
  },

  iconPlay: {
    position: 'absolute',
    width: '100%',
    height: 100,
    top: windowWidth / 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  opacityBlockBottom: {
    backgroundColor: COLORS.BLACK,
    position: 'absolute',
    width: windowWidth,
    height: 35,
    opacity: 0.3,
    top: windowWidth - 15,
  },

  descriptionBottom: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    top: windowWidth - 10,
  },

  textInfo: {
    color: COLORS.WHITE,
    fontSize: 18,
  },

  textBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MovieDetailsImage;
