import React from 'react';


async fetchTopFilms() {
    try {
      let response = await fetch(
        'https://imdb8.p.rapidapi.com/title/get-images?tconst=tt0944947&limit=25',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key':
              'adb453eb86msha69cd81f60ea734p10ef3bjsn283e60ec857f',
            'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          },
        },
      );
      let json = await response.json();
      this.setState({films: json.images[0], isFetching: false});
    } catch (error) {
      this.setState({errorMessage: error});
    }
}