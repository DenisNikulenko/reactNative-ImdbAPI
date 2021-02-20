import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { IMAGE_URL } from '../../utilities/apiUrl';

const MovieDetailsActors = ({movieDetailsActors}) => {
  const navigation = useNavigation();
  
  const renderItem = ({item}) => {
    return (
      <View style={styles.actorCard}>
        <TouchableOpacity onPress={() => navigation.navigate('Actor', {item})}>
          <Image
            style={styles.image}
            source={{
              uri: `${IMAGE_URL}${item.profile_path}`,
            }}
          />
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
      <FlatList
        showsVerticalScrollInstylesdicator={false}
        data={movieDetailsActors}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
      />
  );
};

const styles = StyleSheet.create({
  actorCard: {
    width: Dimensions.get('screen').width / 3.5,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 20,
    height: 210,
    alignContent: "center",
    justifyContent: "center"    
  },

  image: {
    width: "100%",
    height: "90%",  
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20  
  },

  text: {
    marginLeft: 5
  }
});

export default MovieDetailsActors;