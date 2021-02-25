import React from 'react';

import Stars from 'react-native-stars';

const MovieStars = ({voteAverage}) => (
  <Stars
    default={voteAverage}
    count={10}
    spacing={voteAverage}
    starSize={12}
    half={true}
    fullStar={require('../../images/starFilled.png')}
    emptyStar={require('../../images/starEmpty.png')}
    halfStar={require('../../images/starHalf.png')}
    disabled={true} />
)

export default MovieStars;