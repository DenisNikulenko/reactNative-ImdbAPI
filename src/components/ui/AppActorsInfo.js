import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import { IMAGE_URL } from '../../utilities/apiUrl';


const AppActorsInfo = ({castActors, crewActors}) => {

  const renderItem = ({item}) => {
    return (
      <View style={styles.actorCard}>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={{
              uri: `${IMAGE_URL}${item.profile_path}`,
            }}
          />
          <Text style={{marginLeft: 7}}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={castActors}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={crewActors}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
      />
    </View>
  );
};

export default AppActorsInfo;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 20,
  },

  actorCard: {
    width: Dimensions.get('screen').width / 3.5,
    backgroundColor: '#FFF',
    margin: 5,
    borderRadius: 20,
    height: 220,
    alignContent: "center",
    justifyContent: "center"    
  },

  image: {
    width: "100%",
    height: "85%",  
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10  
  },
});
