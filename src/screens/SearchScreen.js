import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';

import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {addToBookmarks} from '../redux/actions/moviesActions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../utilities/colors';
import MovieSearchCard from '../components/MovieSearch/MovieSearchCard';
import {getMovieSearch} from '../services/movieServices';
import MovieIndicator from '../components/ui/MovieIndicator';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [movieSearch, setMovieSearch] = useState('');
  const [foundItems, setFoundItems] = useState([]);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
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

  const scrollOnRefresh = () => {
    setMovieSearch("");
    setRefreshing(true);
    setFoundItems([]);
    setPage(1);
  }

  const scrollLoadMore = () => {
    setPage(page + 1);
  };

  const tabOnSearch = () => {
    fetchAPI(movieSearch);
  }

  return (
    <View style={styles.conteainer}>
      <View style={styles.searchBlock}>
        <TextInput
          value={movieSearch}
          onChangeText={setMovieSearch}
          style={styles.searchInput}
          placeholder="Введите название фильма..."
          maxLength={64}
        />
        <TouchableOpacity style={styles.serchBtn} onPress={tabOnSearch}>
          <Ionicons name="search" color={COLORS.MAIN_COLOR} size={30} />
        </TouchableOpacity>
      </View>
      {foundItems.length ? (
        <View style={styles.contentBlock}>
          <FlatList
            refreshing={refreshing}
            onRefresh={() => scrollOnRefresh()}
            onEndReached={() => scrollLoadMore()}
            onEndReachedThreshold={1}
            ListFooterComponent={() => <MovieIndicator />}
            showsVerticalScrollIndicator={false}
            data={foundItems}
            keyExtractor={(item, idx) => idx.toString()}
            renderItem={({item}) => (
              <MovieSearchCard
                item={item}
                onPressNavigation={() => navigation.navigate('Details')}
                onPressBtn={() => dispatch(addToBookmarks(item))}
                iconName="star-sharp"
                iconColor="white"
                iconSize={30}
              />
            )}
          />
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
    width: Dimensions.get('screen').width - 10,
    height: Dimensions.get('screen').height,
    alignItems: 'center',
    marginBottom: 60,
  },

  searchBlock: {
    width: Dimensions.get('screen').width - 10,
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
    width: '75%',
    height: 55,
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
