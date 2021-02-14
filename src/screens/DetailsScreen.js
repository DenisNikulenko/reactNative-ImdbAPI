import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchDetailsMovie} from '../redux/actions/moviesActions';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {AppButton} from '../components/ui/AppButton';
import {Details} from '../components/Deetails';
import {THEME} from '../utilities/theme';

const MovieDetails = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const movieDetails = useSelector((state) => state.moviesReducer.detailsMovie);

  useEffect(() => {
    const id = route.params.id;
    dispatch(fetchDetailsMovie(id));
  }, []);

  let title = route.params.title;

  title.length > 10 ? (title = `${title.substr(0, 30)}`) : null;

  return (
    <View>
      {/* <View style={styles.container}>
        <AppButton onPress={() => navigation.goBack()}>
          <Ionicons name="return-down-back" size={20} />
        </AppButton>
        <Text style={styles.title}>{title}</Text>
      </View> */}
      <View>
        <Details movieDetails={movieDetails} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.LIGHT_GREY,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    color: THEME.GREY,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MovieDetails;
