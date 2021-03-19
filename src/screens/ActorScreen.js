import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {IMAGE_URL} from '../utilities/apiUrl';

const ActorScreen = ({route}) => {
  const {item} = route.params;
  console.log(item)
  const {
    name,
    profile_path,
  } = item;

  return (
    <View style={styles.container}>
          <Image
            style={styles.actorImage}
            source={{
              uri: `${IMAGE_URL}/${profile_path}`,
            }} />
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },

  actorImage: {
    borderRadius: 150,
    width: 300,
    height: 400,
  },

  text: {
    marginTop: 10,
    fontFamily: 'Roboto-Italic',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default ActorScreen;