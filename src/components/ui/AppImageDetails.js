import React from 'react';
import {View, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {IMAGE_URL} from '../../utilities/apiUrl';

const AppImageDetails = ({posterPath, title, voteAverage, runtime}) => {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        resizeMethod="scale"
        style={styles.imageHeader}
        source={{
          uri: `${IMAGE_URL}/${posterPath}`,
        }}
      />

      <View style={styles.opacityBlockTop}></View>

      <View style={styles.title}>
        <TouchableOpacity
          style={styles.btnBack}
          activeOpacity={0.2}
          onPress={() => navigation.goBack()}>
          <Ionicons
            onPress={() => navigation.goBack()}
            style={styles.iconBack}
            name="arrow-back"
            size={40}
          />
        </TouchableOpacity>
        <Text style={styles.textTitle}>{title}</Text>
      </View>

      <View style={styles.opacityBlockBottom}></View>

      <View style={styles.descriptionBottom}>
        <Text style={{color: 'white', fontSize: 16}}>
          Рейтинг:  
          <Text style={styles.textBold}>
            {voteAverage} < Ionicons name="star" color="yellow"  size={15} />
            </Text>
        </Text>
        <Text style={{color: 'white'}}>
          Длительность: <Text style={styles.textBold}>{runtime}</Text> мин
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  imageHeader: {
    resizeMode: 'cover',
    borderRadius: 5,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 2,
  },

  opacityBlockTop: {
    backgroundColor: 'black',
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: 45,
    opacity: 0.3,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },

  title: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
  },

  btnBack: {
    height: Dimensions.get('screen').height / 18,
    width: Dimensions.get('screen').width / 8,
    marginLeft: 5,
  },

  iconBack: {
    color: 'white',
    width: 50,
    height: 50,
  },

  textTitle: {
    marginRight: 10,
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
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  descriptionBottom: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    top: Dimensions.get('screen').width / 1.08 + 10,
  },

  textBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AppImageDetails;