import React from 'react';

import Stars from 'react-native-stars';

const MovieStars = ({voteAverage}) => (
  <Stars
    default={voteAverage}
    count={10}
    spacing={voteAverage}
    starSize={12}
    half={true}
    fullStar={require('../../assests/images/stars/starFilled.png')}
    emptyStar={require('../../assests/images/stars/starEmpty.png')}
    halfStar={require('../../assests/images/stars/starHalf.png')}
    disabled={true} />
)

export default MovieStars;