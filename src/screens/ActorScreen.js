import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {IMAGE_URL} from '../utilities/apiUrl';

const ActorScreen = ({route}) => {
  const {item} = route.params;
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
      <Text> {item.name} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  actorImage: {
    borderRadius: 150,
    width: 300,
    height: 400,
  }
});

export default ActorScreen;