import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {fetchDetailsMovie} from "../redux/actions/moviesActions"

const MovieDetails = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const movieDetails = useSelector((state) => state.moviesReducer.detailsMovie);

  useEffect(()=>{
    const id = route.params.id;
    dispatch(fetchDetailsMovie(id));
  },[])



  console.log(movieDetails)
  const title = ""

  return (
    <View>
      <View>
        <Button title="back" onPress={() => navigation.goBack()} />

        <Text>zxc</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MovieDetails;
