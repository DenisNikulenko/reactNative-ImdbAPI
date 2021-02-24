import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MovieTabs from './MovieTabs';

const Routes = () => {
  return (
    <NavigationContainer>
      <MovieTabs />
    </NavigationContainer>
  )
}

export default Routes
