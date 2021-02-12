import React from 'react';
import {useSelector} from "react-redux";
import {FlatList, View, Text, StyleSheet} from "react-native";

const FilmList = () => {

    const stateFilms = useSelector(state => state.films)
    console.log(stateFilms.films)
    return (
        <View>
            <Text>{stateFilms.films}</Text>
            <Text>Тут список</Text>
            <Text>Тут список</Text>
            <Text>Тут список</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default FilmList;