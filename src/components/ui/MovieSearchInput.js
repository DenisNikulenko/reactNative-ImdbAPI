import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { THEME } from '../../utilities/theme';

//Не успел
const MovieSearchInput = ({value, onChangeText, onPress}) => {
  return (
    <View style={styles.searchBlock}>
      <TextInput
        value={}
        onChangeText={}
        style={styles.searchInput}
        placeholder="Введите название фильма..."
        maxLength={64}
      />
      <TouchableOpacity
        style={styles.serchBtn}
        onPress={}>
        <Ionicons name="search" color={THEME.MAIN_COLOR} size={30} />
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  searchInput: {
    padding: 10,
    backgroundColor: THEME.WHITE,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    borderBottomRightRadius: 20,
    width: "75%",
    height: 55,
  },

  serchBtn:{
    alignItems: "center",
    justifyContent: "center",
    width: "15%",
    height: "100%",
  }
});

export default MovieSearchInput;