import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, Touchable} from 'react-native';

import FilmList from '../components/FilmList';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      errorMessage: '',
      isFetching: true,
    };
  }

  // async fetchTopFilms() {
  //   try {
  //     let response = await fetch(
  //       'https://imdb8.p.rapidapi.com/title/get-images?tconst=tt0944947&limit=25',
  //       {
  //         method: 'GET',
  //         headers: {
  //           'x-rapidapi-key':
  //             'adb453eb86msha69cd81f60ea734p10ef3bjsn283e60ec857f',
  //           'x-rapidapi-host': 'imdb8.p.rapidapi.com',
  //         },
  //       },
  //     );
  //     let json = await response.json();
  //     this.setState({films: json.images[0], isFetching: false});
  //   } catch (error) {
  //     this.setState({errorMessage: error});
  //   }
  // }

  // componentDidMount() {
  //   this.fetchTopFilms();
  // }

  render() {
    // console.log(this.state.films.caption)
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity>
        <Text>{this.state.films.caption}</Text>
        </TouchableOpacity>
        <FilmList />
      </View>
    );
  }
}

// const HomeScreen = ({navigation}) => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <FilmList />
//     </View>
//   );
// };

const styles = StyleSheet.create({});

export default HomeScreen;
