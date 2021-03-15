import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {getMovieSearch} from '../services/movieServices';

import MovieIndicator from '../components/ui/MovieIndicator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MovieSearchCard from '../components/MovieSearch/MovieSearchCard';
import {windowWidth, windowHeight} from '../utilities/dimensions';
import {COLORS} from '../utilities/colors';

const SearchScreen = () => {
  const [movieSearch, setMovieSearch] = useState('');
  const [foundItems, setFoundItems] = useState([]);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    console.log(foundItems)
    if (movieSearch.length > 3) {
      fetchAPI(movieSearch, page);
    }
  }, [movieSearch, page, refreshing]);

  const fetchAPI = async (movieSearch, page = 1) => {
    setFoundItems([
      ...foundItems,
      ...(await getMovieSearch(movieSearch, page)),
    ]);

    setRefreshing(false);
  };

  const OnRefresh = () => {
    setMovieSearch('');
    setRefreshing(true);
    setFoundItems([]);
    setPage(1);
  };

  const scrollLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <View style={styles.conteainer}>
      
      <View style={styles.searchBlock}>
        <TextInput
          value={movieSearch}
          onChangeText={setMovieSearch}
          style={styles.searchInput}
          placeholder="Введите название фильма..."
          maxLength={64} />
        <TouchableOpacity style={styles.serchBtn} onPress={OnRefresh}>
          <Ionicons name="close-outline" color={COLORS.MAIN_COLOR} size={34} />
        </TouchableOpacity>
      </View>

      {foundItems.length ? (
        <View style={styles.contentBlock}>
          <FlatList
            refreshing={refreshing}
            onRefresh={() => spodeыOnRefresh()}
            onEndReached={() => scrollLoadMore()}
            onEndReachedThreshold={1}
            ListFooterComponent={() => <MovieIndicator />}
            showsVerticalScrollIndicator={false}
            data={foundItems}
            keyExtractor={(item, idx) => idx.toString()}
            renderItem={({item}) => <MovieSearchCard item={item} />} />
        </View>
      ) : (
        <View style={styles.textNoContent}>
          <Text>Что будем искать?</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  conteainer: {
    flex: 1,
    width: windowWidth - 10,
    height: windowHeight,
    alignItems: 'center',
    marginBottom: 60,
  },

  searchBlock: {
    width: windowWidth - 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: COLORS.LIGHT_GREY,
    borderTopEndRadius: 15,
  },

  searchInput: {
    padding: 10,
    backgroundColor: COLORS.WHITE,
    borderBottomColor: COLORS.MAIN_COLOR,
    borderBottomWidth: 2,
    borderBottomRightRadius: 20,
    width: '80%',
    height: 50,
  },

  serchBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
    height: '100%',
  },

  textNoContent: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default SearchScreen;
