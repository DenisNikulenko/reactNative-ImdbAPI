import React, {Component} from 'react';
// import {useSelector} from "react-redux";
import { View, Text, StyleSheet} from "react-native";
import {connect} from "react-redux"
import PropTypes from "prop-types";
import {fetchFilms} from "../redux/actions/movieActions";

class FilmList extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //     }
    // }

    componentDidMount() {
      this.props.fetchFilms()
    }

    render() {
      console.log(this.props.films)
      return (
        <View>
          <Text>HALLO</Text>
        </View>
      )
    }

}


// const FilmList = () => {

//     const stateFilms = useSelector(state => state.films)
//     console.log(stateFilms.films)
//     return (
//         <View>
//             <Text>{stateFilms.films}</Text>
//             <Text>Тут список</Text>
//             <Text>Тут список</Text>
//             <Text>Тут список</Text>
//         </View>
//     )
// }

const styles = StyleSheet.create({

});

const mapStateToProps = (state) => {
  return {
    films: state
  }
}

export default connect(mapStateToProps, {fetchFilms})(FilmList);